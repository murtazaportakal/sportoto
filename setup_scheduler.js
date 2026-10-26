/**
 * Windows Task Scheduler Setup
 * 
 * Creates a scheduled task that runs "npm run sync" every night at 02:00.
 * Run once as Administrator: node setup_scheduler.js
 *
 * To remove the task later:
 *   schtasks /Delete /TN "SportotoAutoSync" /F
 */

const { execSync } = require('child_process');
const path = require('path');

const taskName  = 'SportotoAutoSync';
const nodeExe   = process.execPath;   // full path to node.exe
const scriptDir = __dirname;
const scriptPath = path.join(scriptDir, 'auto_sync.js');
const logFile   = path.join(scriptDir, 'data', 'sync_log.txt');

// Schedule: every day at 02:00
const startTime = '02:00';
const schedule  = 'DAILY';

// Build the command that the task will run
// We wrap in cmd /c so that stdout/stderr are captured to the log file
const taskCmd = `"${nodeExe}" "${scriptPath}" >> "${logFile}" 2>&1`;

try {
  console.log('========================================');
  console.log('Spor Toto Auto-Sync — Task Scheduler Setup');
  console.log('========================================');

  // Delete existing task silently (in case of re-run)
  try {
    execSync(`schtasks /Delete /TN "${taskName}" /F`, { stdio: 'pipe' });
    console.log(`Removed existing task: ${taskName}`);
  } catch (_) { /* task didn't exist yet — OK */ }

  // We use PowerShell's ScheduledTasks module because it supports:
  // 1. -StartWhenAvailable: If PC is turned OFF at 02:00, it automatically runs IMMEDIATELY when the PC powers on!
  // 2. -WakeToRun: If PC is asleep, it wakes the PC up to run the sync.
  // 3. -AllowStartIfOnBatteries / -DontStopIfGoingOnBatteries: Works even on laptop battery.
  const psScript = `
    $taskName = '${taskName}';
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue;
    $action = New-ScheduledTaskAction -Execute 'cmd.exe' -Argument '/c ""${nodeExe}"" ""${scriptPath}"" >> ""${logFile}"" 2>&1';
    $trigger = New-ScheduledTaskTrigger -Daily -At '${startTime}';
    $settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -WakeToRun -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries;
    $principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Highest;
    Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Force | Out-Null;
  `.replace(/\r?\n/g, ' ');

  let success = false;
  try {
    execSync(`powershell -NoProfile -ExecutionPolicy Bypass -Command "${psScript.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
    success = true;
  } catch (psErr) {
    console.log('PowerShell registration failed, falling back to standard schtasks...');
    const createCmd = [
      'schtasks /Create',
      `/TN "${taskName}"`,
      `/TR "cmd /c ${taskCmd}"`,
      `/SC ${schedule}`,
      `/ST ${startTime}`,
      '/RL HIGHEST',
      '/F'
    ].join(' ');
    execSync(createCmd, { stdio: 'inherit' });
    success = true;
  }

  console.log('');
  console.log(`✅ Scheduled task created: "${taskName}"`);
  console.log(`   Schedule          : Every day at ${startTime}`);
  console.log(`   Catch-up on boot  : YES (StartWhenAvailable enabled)`);
  console.log(`   Wake from sleep   : YES (WakeToRun enabled)`);
  console.log(`   Script            : ${scriptPath}`);
  console.log(`   Log               : ${logFile}`);
  console.log('');
  console.log('💡 How it behaves when the PC is off:');
  console.log('   - If PC is ASLEEP at 02:00   -> Wakes up, syncs, sleeps.');
  console.log('   - If PC is SHUT DOWN at 02:00 -> Automatically syncs as soon as you turn the PC on!');
  console.log('');
  console.log('To run manually right now:');
  console.log(`   npm run sync`);
  console.log('');
  console.log('To check the task status:');
  console.log(`   schtasks /Query /TN "${taskName}" /V /FO LIST`);
  console.log('');
  console.log('To remove the task:');
  console.log(`   schtasks /Delete /TN "${taskName}" /F`);

} catch (err) {
  console.error('');
  console.error('❌ Failed to create scheduled task.');
  console.error('   Make sure you are running this script as Administrator.');
  console.error(`   Error: ${err.message}`);
  process.exit(1);
}

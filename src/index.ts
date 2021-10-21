import { existsSync } from 'fs'
import { spawn } from 'child_process'

if (!existsSync('./node_modules')) {
  const child = spawn('npm', ['install', '--color=always'], { stdio: 'pipe' })
  child.stdout?.pipe(process.stdout)
  child.stderr?.pipe(process.stderr)
}

import { existsSync } from 'fs'
import { spawn } from 'child_process'
import { resolve } from 'path'

if (!existsSync(resolve(process.cwd(), 'node_modules'))) {
  const child = spawn('npm', ['ci', '--color=always'], {
    stdio: 'pipe',
    cwd: process.cwd()
  })
  child.stdout?.pipe(process.stdout)
  child.stderr?.pipe(process.stderr)
}

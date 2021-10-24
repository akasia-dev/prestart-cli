import { existsSync } from 'fs'
import { spawn } from 'child_process'
import { resolve } from 'path'

if (!existsSync(resolve(process.cwd(), 'node_modules'))) {
  const isPackageLockExist = existsSync(
    resolve(process.cwd(), 'package-lock.json')
  )
  const child = spawn(
    'npm',
    [isPackageLockExist ? 'ci' : 'install', '--color=always'],
    {
      stdio: 'pipe',
      cwd: process.cwd()
    }
  )
  child.stdout?.pipe(process.stdout)
  child.stderr?.pipe(process.stderr)
}

# Computing Basics — Notes

## User Identity
Command:
whoami
echo $HOME

Learned:
- whoami shows current logged-in user
- $HOME shows home directory
- User identity matters because permissions depend on user ownership

---

## Processes
Command:
ps aux

Learned:
- A process is a running instance of a program
- Each process has a PID (Process ID)
- OS manages all processes and schedules CPU time

Difference:
Program = file on disk
Process = running program in memory

---

## Script Execution Permission
Issue:
./hello.sh → Permission denied

Fix:
chmod +x hello.sh

Learned:
- Files must have execute permission to run
- chmod modifies permission bits

---

## File Permissions
Example:
-rwxr--r--

Meaning:
Owner → read write execute
Group → read
Others → read

Format:
r = read
w = write
x = execute

---

## Servers and Ports
Command:
python3 -m http.server 8000

Learned:
- Server listens on a port
- Port is endpoint for network communication
- Only one process can use a port at a time

---

## Finding Process Using Port
Command:
lsof -i :3000

Learned:
- Shows which process is using a port
- Displays PID, user, command

---

## Killing Processes
Command:
kill <PID>

Learned:
- Terminates process
- Used when server is stuck or port busy

kill vs kill -9
kill → graceful stop
kill -9 → force stop

Best practice:
Use normal kill first

---

## Port Conflict Error
Error:
Address already in use

Cause:
Another process already bound to same port

Fix workflow:
1. Identify process using port
2. Kill process
3. Restart server

---

## Sudo Usage Principle
Do not use sudo unless necessary.

Reason:
- root access can damage system
- security risk

Professional rule:
Use minimum required privileges.

---

## Key Takeaway
Understanding processes, permissions, ports, and users is essential because every web server, database, container, or backend application relies on these system concepts.

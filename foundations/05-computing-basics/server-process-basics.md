# Mini Server Investigation Report

## Step 1 — Start Server
Command:
python3 -m http.server 5000

Result:
Server started successfully and began listening on port 5000.

---

## Step 2 — Verify Server Running
Command:
lsof -i :5000

Output showed:
- python3 process
- PID number
- LISTEN state

Meaning:
Server process is active and bound to port.

---

## Step 3 — Identify Process Details
Observed:
- PID identifies process uniquely
- USER shows who owns process
- LISTEN indicates waiting for requests

---

## Step 4 — Stop Server Process
Command:
kill <PID>

Result:
Server stopped.

Verification:
lsof -i :5000 returned no output.

Meaning:
Port successfully freed.

---

## Step 5 — Port Conflict Simulation
Attempted:
Start server again on same port while another server running.

Error received:
Address already in use

Reason:
Only one process can bind to a port at a time.

---

## Step 6 — Debugging Workflow Learned

Professional debugging sequence:

1. Detect error
2. Inspect port usage
3. Identify PID
4. Kill process
5. Restart server

---

## Concepts Learned

Process:
Running program instance managed by OS

Port:
Network endpoint used by processes

PID:
Unique identifier assigned to running process

Permission:
Controls who can read/write/execute files

---

## Final Reflection
This exercise demonstrated how operating system concepts directly affect development workflows. Understanding processes, ports, and permissions allows developers to debug server issues efficiently and confidently.

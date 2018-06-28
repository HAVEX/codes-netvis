# CODES-NetVis 

The CODES-NetVis tool can be used to visualize and analyze CODES network simulation results. 

## Requirements
Install NodeJS (>=6.0) and NPM. NVM is recommended for controlling the versions of NodeJS and NPM.

## Setup and Run
```
npm install
npm start
```


## Input Data Files
Different CODES input and output files are needed to be provided to the CODES-NetVis tool. Here are the details on each of these files.

### Router Result Files
* Router saturation time and traffic are logged in two files (router-stats and router-traffic). 
* Schema for router-stats: LP_ID, Group_ID, Router_ID, <Sat. time per router port(s)>
* Schema for router-traffic: LP_ID, Group_ID, Router_ID, <Link Traffic per router port(s)>

### Compute Node Result Files
* Performance metrics for compute nodes or terminals in a network model (msg-stats)
* Schema: lp_id, terminal_id, data_size, Avg_packet_latency, packets_finished, avg_hops, saturation_time

### Network Configuration Files
* Settings and parameters used for configuring the network model, including the number of routers and compute nodes in a network.  

### Network Connectivity Files
* Connection of the network topology and the associated link arrangements
* Schema: source_lp_gid, dest_lp_gid, source_type, dest_type

### Workload and Job Allocation Files
* Each job or workload is listed in each line in the workload configuration file.
* All the compute nodes allocated for each job is separated by a line bread in the job allocation file. 


# Input Data Files

The CODES-VIS toolkit can be used to visualize and analyze CODES simulation results. 
Different CODES input and output files need to be provided to the CODES-VIS toolkit. Here are the details on each of these files.

## Compute Node Result files
* Performance metrics for compute nodes or terminals in a network model (msg-stats)
* Schema: lp_id, terminal_id, data_size, Avg_packet_latency, packets_finished, avg_hops, saturation_time


## Router Result files
* Router saturation time and traffic are logged in two files (router-stats and router-traffic). 
* Schema for router-stats: LP_ID, Group_ID, Router_ID, <Sat. time per router port(s)>
* Schema for router-traffic: LP_ID, Group_ID, Router_ID, <Link Traffic per router port(s)>

## Network Configuration Files
* Settings and parameters used for configuring the network model, including the number of routers and compute nodes in a network.  

## Workload and Job Allocation Files
* Configuration about the workload and job allocation.  

## Network Connection Files
* Connection of the network topology and the associated link arrangements
* Schema: source_lp_gid, dest_lp_gid, source_type, dest_type
# Batch 1: Q1–Q200

## Introduction to Big Data (17 Questions)

1. Which of the following is NOT considered one of the three primary dimensions (3 V's) of Big Data?
A) Volume
B) Velocity
C) Variety
D) Validity
Answer: D

2. The characteristic of Big Data that refers to the speed at which data is generated, collected, and processed is:
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: B

3. Which term describes the trustworthiness and quality of the data, a critical challenge in Big Data?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

4. Which of the following is an example of a source of Big Data characterized by high velocity?
A) Historical government census records
B) Financial market stock tickers
C) Large static image archives
D) Corporate email backups
Answer: B

5. Big Data adoption challenges often include:
A) Lack of data storage capacity
B) Shortage of skilled data scientists and engineers
C) Over-reliance on traditional relational databases
D) All of the above
Answer: D

6. Which of the following best describes the role of a Data Scientist in the Big Data ecosystem?
A) Managing the physical hardware of the cluster
B) Designing and implementing ETL pipelines
C) Applying statistical and machine learning models to extract insights
D) Writing low-level HDFS commands
Answer: C

7. The concept of "Data Sharing and Reuse Practices" primarily addresses which Big Data challenge?
A) Volume, by reducing redundant storage
B) Velocity, by speeding up data ingestion
C) Variety, by standardizing data formats
D) Veracity, by ensuring data provenance and quality
Answer: D

8. Which research trend focuses on the development of new data structures and algorithms to handle massive, unstructured datasets efficiently?
A) Traditional OLAP
B) Evolving data repositories
C) Relational algebra optimization
D) Data warehousing
Answer: B

9. The implication of Big Data for repository data curation often involves a shift from:
A) Manual, file-by-file curation to automated, metadata-driven curation
B) Centralized storage to decentralized storage
C) Batch processing to real-time processing
D) Structured data to semi-structured data
Answer: A

10. Which of the following is a key driver for the adoption of Big Data technologies in modern enterprises?
A) The need for faster, more informed decision-making
B) The desire to reduce hardware costs
C) The simplification of IT infrastructure
D) The elimination of data silos
Answer: A

11. What does the "Variety" characteristic of Big Data primarily refer to?
A) The number of different data formats and types
B) The number of different storage locations
C) The number of different users accessing the data
D) The number of different processing frameworks
Answer: A

12. Which of the following is a typical example of unstructured data in a Big Data environment?
A) A CSV file with customer records
B) A relational database table
C) Social media posts and video files
D) XML configuration files
Answer: C

13. The term "Big Data beyond the hype" suggests a focus on:
A) The underlying technology stack rather than business value
B) The practical, real-world applications and business outcomes
C) The theoretical limits of data processing
D) The marketing buzz surrounding the technology
Answer: B

14. Which Big Data skill is most crucial for optimizing the performance of a large-scale data processing job?
A) Advanced SQL querying
B) Understanding distributed systems architecture
C) Front-end web development
D) Traditional database administration
Answer: B

15. What is the primary purpose of a "data lake" in the context of Big Data?
A) To store only structured, clean data for immediate analysis
B) To store raw, unprocessed data in its native format at scale
C) To serve as the final layer for reporting and visualization
D) To replace all existing data warehouses
Answer: B

16. Which of the following is a challenge related to the "Veracity" of Big Data?
A) Data volume exceeding storage capacity
B) Data arriving too quickly to process
C) Data inconsistency, bias, and noise
D) Data being stored in too many different formats
Answer: C

17. Which ecosystem role is primarily responsible for ensuring the security and governance of the Big Data platform?
A) Data Analyst
B) Data Engineer
C) System Administrator
D) Business User
Answer: C

## Hadoop Fundamentals (16 Questions)

18. What is the core component of the Hadoop framework responsible for distributed storage?
A) MapReduce
B) YARN
C) HDFS
D) Hive
Answer: C

19. Which component of Hadoop is responsible for resource management and job scheduling?
A) HDFS
B) MapReduce
C) YARN
D) HBase
Answer: C

20. The Hadoop Distributed File System (HDFS) is designed to run on:
A) High-end, specialized server hardware
B) A single, powerful machine
C) Clusters of commodity hardware
D) Virtualized cloud environments only
Answer: C

21. What is the default block size in modern versions of HDFS (e.g., Hadoop 2.x and later)?
A) 64 MB
B) 128 MB
C) 256 MB
D) 512 MB
Answer: B

22. The design principle of HDFS that prioritizes moving computation to the data, rather than data to the computation, is known as:
A) Data locality
B) Data replication
C) Fault tolerance
D) High availability
Answer: A

23. Which of the following is a characteristic of HDFS?
A) Low-latency data access
B) Optimized for small file storage
C) Write-once, read-many access model
D) Supports random writes to files
Answer: C

24. In the Hadoop ecosystem, which technology is a high-level data flow language and execution framework for parallel computation?
A) Pig
B) Sqoop
C) Flume
D) ZooKeeper
Answer: A

25. Which Hadoop component is a NoSQL database that runs on top of HDFS, providing random, real-time read/write access to Big Data?
A) Hive
B) Impala
C) HBase
D) Spark SQL
Answer: C

26. What is the primary function of the NameNode in HDFS?
A) Storing the actual data blocks
B) Managing the file system namespace and metadata
C) Executing MapReduce tasks
D) Monitoring cluster resources
Answer: B

27. Which of the following is a popular commercial distribution of Hadoop?
A) Apache Hadoop
B) Cloudera
C) Hortonworks (now part of Cloudera)
D) Both B and C
Answer: D

28. What is the NameNode's metadata stored on?
A) A separate, distributed database
B) The NameNode's local disk and in-memory
C) All DataNodes in the cluster
D) A dedicated SAN storage
Answer: B

29. Which of the following is NOT a core component of the Hadoop 2.x architecture?
A) HDFS
B) MapReduce
C) YARN
D) JobTracker
Answer: D

30. The Hadoop development environment setup typically involves configuring:
A) SSH for passwordless login
B) Java Development Kit (JDK)
C) Hadoop configuration files (e.g., core-site.xml)
D) All of the above
Answer: D

31. What is the main purpose of the Secondary NameNode?
A) To act as a hot standby for the NameNode
B) To receive and process all client requests
C) To merge the NameNode's edit logs with the fsimage
D) To store a secondary copy of all data blocks
Answer: C

32. Which of the following best describes the Hadoop ecosystem?
A) A single software package for data storage and processing
B) A collection of related projects that extend Hadoop's capabilities
C) A proprietary system developed by a single company
D) A file system replacement for Linux
Answer: B

33. What is the role of the DataNode in HDFS?
A) Managing the file system metadata
B) Storing and retrieving data blocks as instructed by the NameNode
C) Scheduling and monitoring application jobs
D) Translating SQL queries into MapReduce jobs
Answer: B

## HDFS Deep Dive (15 Questions)

34. Which HDFS command-line interface utility is used to display the contents of a file in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -cat`
C) `hdfs dfs -put`
D) `hdfs dfs -get`
Answer: B

35. What is the primary mechanism HDFS uses to achieve fault tolerance?
A) Data encryption
B) Data compression
C) Data replication
D) Data partitioning
Answer: C

36. The Java interface to HDFS allows developers to interact with the file system using which class?
A) `java.io.File`
B) `org.apache.hadoop.fs.FileSystem`
C) `java.nio.Path`
D) `org.apache.hadoop.hdfs.NameNode`
Answer: B

37. When a client writes a file to HDFS, which node does it first contact to request a file creation?
A) DataNode
B) Secondary NameNode
C) NameNode
D) JobTracker
Answer: C

38. What is the default replication factor for data blocks in HDFS?
A) 1
B) 2
C) 3
D) 4
Answer: C

39. Which HDFS web interface provides a detailed view of the cluster's health, including DataNode status and block reports?
A) NameNode Web UI
B) ResourceManager Web UI
C) JobHistory Server Web UI
D) DataNode Web UI
Answer: A

40. What happens when a DataNode fails in an HDFS cluster?
A) The NameNode immediately shuts down the cluster.
B) The NameNode detects the failure and initiates re-replication of the missing blocks.
C) The client automatically switches to the Secondary NameNode.
D) The file becomes permanently unavailable.
Answer: B

41. The HDFS command `hdfs dfs -put local_file /hdfs_path` is used for:
A) Copying a file from HDFS to the local file system
B) Copying a file from the local file system to HDFS
C) Listing files in HDFS
D) Deleting a file in HDFS
Answer: B

42. Which HDFS feature is crucial for maintaining data integrity by periodically checking data blocks for corruption?
A) Checksumming
B) Data locality
C) Rack awareness
D) Snapshotting
Answer: A

43. Scaling out a Hadoop cluster primarily involves:
A) Upgrading the NameNode's CPU
B) Increasing the RAM on existing nodes
C) Adding more commodity DataNodes
D) Migrating to a different file system
Answer: C

44. The HDFS Java API uses which stream class for reading data from HDFS?
A) `FileInputStream`
B) `FSDataInputStream`
C) `HDFSInputStream`
D) `DataInputStream`
Answer: B

45. What is the purpose of the `fsimage` file in the NameNode?
A) It is a transaction log of all file system changes.
B) It is a snapshot of the file system metadata at a specific point in time.
C) It stores the actual user data.
D) It contains the cluster configuration settings.
Answer: B

46. Which HDFS command is used to change the replication factor of a file?
A) `hdfs dfs -setrep`
B) `hdfs dfs -chown`
C) `hdfs dfs -chmod`
D) `hdfs dfs -replicate`
Answer: A

47. What is the role of "rack awareness" in HDFS?
A) To ensure data blocks are only stored on nodes in the same physical rack.
B) To optimize data placement and retrieval by considering network topology.
C) To prevent unauthorized access to data blocks.
D) To automatically balance data across all DataNodes.
Answer: B

48. HDFS monitoring and maintenance often involve checking the NameNode's health and:
A) Manually backing up all DataNode disks
B) Reviewing the DataNode heartbeats and block reports
C) Reformatting the file system daily
D) Running a full virus scan on all nodes
Answer: B

## MapReduce (25 Questions)

49. What is the primary function of the Mapper phase in a MapReduce job?
A) To aggregate and summarize the data
B) To filter and transform the input data into key-value pairs
C) To sort the intermediate key-value pairs
D) To write the final output to HDFS
Answer: B

50. The input to the Reducer phase in MapReduce is:
A) The raw input data from HDFS
B) The unsorted output from the Mappers
C) The sorted and grouped output from the Shuffle and Sort phase
D) The final output from the job
Answer: C

51. Which phase in the MapReduce job execution flow is responsible for transferring the Mapper's output to the Reducer's input?
A) Map phase
B) Reduce phase
C) Shuffle and Sort phase
D) Input split phase
Answer: C

52. What is the role of the Combiner in a MapReduce job?
A) To combine the final output files into one
B) To perform a local aggregation on the Mapper's output before the Shuffle phase
C) To combine the input splits into a single file
D) To combine the Reducer's output with the Mapper's output
Answer: B

53. The `InputFormat` class in MapReduce is responsible for:
A) Specifying the number of Reducer tasks
B) Defining how the input data is split and read
C) Defining the key-value pairs for the output
D) Specifying the location of the input files
Answer: B

54. What is the purpose of the `Partitioner` in MapReduce?
A) To partition the input data into equal-sized splits
B) To determine which Reducer will receive a particular intermediate key
C) To partition the final output into multiple files
D) To partition the cluster resources among different jobs
Answer: B

55. In the anatomy of a MapReduce job, the `Job` object is used by the client to:
A) Execute the Map and Reduce functions locally
B) Configure the job and submit it to the YARN ResourceManager
C) Monitor the progress of the Reducer tasks only
D) Directly manage the HDFS file system
Answer: B

56. What is the default data type for keys and values in MapReduce?
A) Java primitives (int, String)
B) Hadoop Writable types (e.g., `Text`, `IntWritable`)
C) JSON objects
D) Python dictionaries
Answer: B

57. Which of the following is a common failure handling mechanism in MapReduce?
A) Restarting the entire cluster on any task failure
B) Speculative execution of slow tasks
C) Manually re-running failed tasks by the user
D) Ignoring failed tasks and continuing the job
Answer: B

58. What does the term "speculative execution" refer to in MapReduce?
A) Running multiple copies of the same task on different nodes and taking the result of the first one to finish
B) Predicting the outcome of the job before it starts
C) Executing the Map phase only if the Reduce phase is expected to succeed
D) Running the job on a subset of the data first
Answer: A

59. The `OutputFormat` class in MapReduce is responsible for:
A) Reading the input data
B) Writing the final key-value pairs to the output file
C) Sorting the intermediate data
D) Grouping the keys for the Reducer
Answer: B

60. Which of the following is a real-world use case ideally suited for the MapReduce programming model?
A) Real-time stock trading
B) Interactive SQL querying
C) Large-scale log analysis and indexing
D) Graph processing
Answer: C

61. The `JobTracker` (in Hadoop 1.x) or `ResourceManager` (in Hadoop 2.x/YARN) is responsible for:
A) Storing the input data
B) Scheduling and monitoring the execution of MapReduce jobs
C) Performing the actual Map and Reduce operations
D) Managing the NameNode metadata
Answer: B

62. What is the main difference between the `map` function and the `reduce` function in terms of output?
A) `map` outputs key-value pairs, `reduce` outputs only values.
B) `map` outputs a single value, `reduce` outputs multiple key-value pairs.
C) `map` outputs intermediate key-value pairs, `reduce` outputs the final result key-value pairs.
D) `map` outputs only keys, `reduce` outputs only values.
Answer: C

63. Which data type is typically used for the key in a MapReduce job that counts word frequencies?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `FloatWritable`
Answer: C

64. The process of grouping all intermediate values associated with the same key is handled by which component?
A) Mapper
B) Reducer
C) Partitioner
D) Grouping Comparator
Answer: D

65. What is the effect of setting the number of reducers to zero?
A) The job will fail immediately.
B) The job will run, but the output will be unsorted.
C) The job will run, and the Map phase output will be the final output (Map-only job).
D) The job will be automatically converted to a Spark job.
Answer: C

66. In the Shuffle and Sort phase, why is the data sorted before being passed to the Reducer?
A) To ensure the output is always in alphabetical order.
B) To allow the Reducer to process all values for a single key together efficiently.
C) To reduce the total data transfer size.
D) To enable the use of the Combiner.
Answer: B

67. What is the main drawback of the MapReduce programming model compared to newer frameworks like Spark?
A) Lack of fault tolerance
B) Inability to handle large datasets
C) High latency due to excessive disk I/O between stages
D) Limited language support
Answer: C

68. The `RecordReader` in MapReduce is responsible for:
A) Reading the entire input file into memory
B) Converting a byte-oriented input split into record-oriented key-value pairs
C) Writing the final output records
D) Managing the NameNode's metadata
Answer: B

69. Which MapReduce feature allows a job to share read-only data across all Map and Reduce tasks?
A) Distributed Cache
B) Shared Variables
C) Accumulators
D) Broadcast Variables
Answer: A

70. The `TaskTracker` (in Hadoop 1.x) or `NodeManager` (in Hadoop 2.x/YARN) is responsible for:
A) Managing the cluster's file system
B) Launching and monitoring the execution of tasks on a single node
C) Scheduling jobs across the entire cluster
D) Storing the NameNode's metadata
Answer: B

71. Which MapReduce data format is typically used for processing log files where each line is a record?
A) `SequenceFileInputFormat`
B) `KeyValueTextInputFormat`
C) `TextInputFormat`
D) `NLineInputFormat`
Answer: C

72. What is the primary goal of job scheduling in MapReduce/YARN?
A) To minimize the total number of tasks
B) To maximize data locality and cluster utilization
C) To ensure all jobs finish at the same time
D) To prioritize jobs based on their size
Answer: B

73. How does MapReduce handle task failure?
A) It immediately terminates the entire job.
B) It reports the failure to the user and waits for manual intervention.
C) It re-executes the failed task on a different NodeManager.
D) It ignores the failed task and continues with the rest.
Answer: C

## Event/Complex Stream Processing (4 Questions)

74. Which concept is primarily concerned with analyzing a continuous flow of data and identifying patterns or conditions in real-time?
A) Batch Processing
B) Complex Event Processing (CEP)
C) Data Warehousing
D) ETL
Answer: B

75. Event stream processing is characterized by:
A) Processing data at rest
B) Processing data in motion
C) Processing data only once a day
D) Processing data in fixed, large batches
Answer: B

76. Which of the following is a common use case for Complex Event Processing (CEP)?
A) Generating monthly sales reports
B) Detecting fraudulent credit card transactions in real-time
C) Backing up a large database
D) Running a nightly ETL job
Answer: B

77. Which technology is often used in conjunction with Big Data frameworks for high-throughput, low-latency event stream ingestion?
A) HDFS
B) Apache Kafka
C) MapReduce
D) Apache Hive
Answer: B

## Hadoop Environment & Administration (15 Questions)

78. Which Hadoop configuration file is used to specify the default file system (e.g., `fs.defaultFS`)?
A) `mapred-site.xml`
B) `yarn-site.xml`
C) `core-site.xml`
D) `hdfs-site.xml`
Answer: C

79. The `dfs.replication` property, which sets the default block replication factor, is configured in which file?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

80. What is the primary purpose of a Hadoop benchmark?
A) To test the cluster's ability to run standard workloads and measure performance
B) To automatically configure the cluster settings
C) To deploy new applications to the cluster
D) To monitor the health of individual DataNodes
Answer: A

81. Which of the following is a key security concept in Hadoop, often implemented using Kerberos?
A) Data encryption at rest
B) Authentication and authorization
C) Data compression
D) Data locality
Answer: B

82. Administering Hadoop clusters often involves managing the health of which YARN component, responsible for launching and monitoring containers on a node?
A) ResourceManager
B) NameNode
C) NodeManager
D) JobHistory Server
Answer: C

83. What is the main function of the `start-dfs.sh` script in a pseudo-distributed or fully distributed setup?
A) To start all YARN services
B) To start the NameNode and all DataNodes
C) To start all MapReduce services
D) To format the HDFS file system
Answer: B

84. Cluster specification and sizing for a Hadoop cluster is primarily determined by:
A) The total number of users
B) The volume, velocity, and variety of the data to be processed
C) The choice of operating system
D) The network bandwidth between racks only
Answer: B

85. Which Hadoop configuration file contains settings for the ResourceManager and NodeManager?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: D

86. What is the significance of the `hadoop-env.sh` file?
A) It defines the environment variables for Hadoop, such as `JAVA_HOME`.
B) It contains the list of all DataNodes in the cluster.
C) It stores the HDFS metadata.
D) It is used to submit MapReduce jobs.
Answer: A

87. Which security mechanism is used to ensure that data transmitted between Hadoop components is protected from eavesdropping?
A) SSL/TLS encryption
B) Kerberos authentication
C) HDFS replication
D) Data locality
Answer: A

88. When administering a Hadoop cluster, what is the process of bringing the NameNode back online after a failure and restoring its state called?
A) Failover
B) Formatting
C) Benchmarking
D) Re-replication
Answer: A

89. Which command is used to check the disk usage and capacity of the HDFS file system?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -df`
D) `hdfs dfs -count`
Answer: C

90. What is the purpose of the `slaves` file (or `workers` file in newer versions) in the Hadoop configuration?
A) To list all the DataNodes/NodeManagers in the cluster
B) To list all the NameNodes
C) To list all the client machines
D) To store the cluster's security credentials
Answer: A

91. What is the primary role of the JobHistory Server in YARN?
A) To store the running application logs
B) To provide information about completed applications
C) To manage the cluster resources
D) To execute the Map and Reduce tasks
Answer: B

92. Which Hadoop security concept ensures that a user can only access the data they are permitted to see?
A) Authentication
B) Authorization
C) Auditing
D) Encryption
Answer: B

## Apache Airflow / ETL / Informatica (15 Questions)

93. What is the fundamental difference between ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform)?
A) ETL is for structured data, ELT is for unstructured data.
B) ETL performs transformation before loading into the target system; ELT loads first, then transforms within the target system.
C) ETL is used for batch processing, ELT is used for streaming.
D) ETL is proprietary, ELT is open-source.
Answer: B

94. Which of the following is a key advantage of the ELT approach in a Big Data environment?
A) Reduced reliance on the processing power of the target system
B) Ability to leverage the massive parallel processing (MPP) capabilities of the data lake/warehouse
C) Lower storage costs
D) Faster initial data loading time
Answer: B

95. Workflow orchestration tools like Apache Airflow are primarily used for:
A) Storing Big Data
B) Visualizing data analysis results
C) Managing and scheduling complex data pipelines (DAGs)
D) Performing real-time stream processing
Answer: C

96. In the context of data warehousing, what is the primary purpose of a "staging area" in the ETL process?
A) To store the final, clean data
B) To temporarily hold data after extraction and before transformation
C) To serve as the source for reporting tools
D) To store metadata about the transformation process
Answer: B

97. Which of the following is a common transformation operation in an ETL pipeline?
A) Data extraction from a source database
B) Data loading into a target data warehouse
C) Data cleansing, aggregation, and standardization
D) Data visualization
Answer: C

98. A "data warehouse" is typically optimized for:
A) High-volume transactional processing (OLTP)
B) Complex analytical queries (OLAP)
C) Storing raw, unstructured data
D) Real-time data ingestion
Answer: B

99. Which of the following best describes the function of a "Directed Acyclic Graph" (DAG) in Apache Airflow?
A) A graph showing the physical network topology of the cluster
B) A collection of all the tasks that need to be run, organized by their dependencies
C) A data structure used for storing HDFS metadata
D) A visualization of the final data model
Answer: B

100. Which tool is a commercial, enterprise-level solution for ETL and data integration?
A) Apache Spark
B) Apache Airflow
C) Informatica PowerCenter
D) Apache Hive
Answer: C

101. Designing ETL data pipelines in a Big Data context often requires consideration of:
A) The size of the data blocks in HDFS
B) The parallel processing capabilities of the chosen framework (e.g., MapReduce or Spark)
C) The number of NameNodes
D) The default replication factor
Answer: B

102. What is the main benefit of using a dedicated orchestration tool like Airflow over simple cron jobs for data pipelines?
A) Lower execution time
B) Built-in dependency management, monitoring, and failure handling
C) Reduced data storage requirements
D) Automatic data transformation
Answer: B

103. Which of the following is a characteristic of a "data lake"?
A) Schema-on-write
B) Schema-on-read
C) Highly structured data only
D) Optimized for fast transactional updates
Answer: B

104. In the context of data integration, what does the term "data lineage" refer to?
A) The physical location of the data
B) The origin, movement, and transformations of data over time
C) The security permissions on the data
D) The data's primary key
Answer: B

105. Which of the following is a typical source system for an ETL pipeline?
A) Operational databases (OLTP)
B) Flat files
C) SaaS application APIs
D) All of the above
Answer: D

106. When designing an ELT pipeline, the "Transform" step is typically executed using:
A) Traditional SQL stored procedures on a separate server
B) The processing power of the target data warehouse (e.g., Spark SQL, HiveQL)
C) A dedicated Informatica server
D) A single-threaded Python script
Answer: B

107. The process of moving data from a source system to a target system is generally referred to as:
A) Data modeling
B) Data governance
C) Data ingestion
D) Data visualization
Answer: C

## Apache Hive (21 Questions)

108. Apache Hive is a data warehouse system built on top of Hadoop that provides a SQL-like query language called:
A) T-SQL
B) HiveQL
C) Pig Latin
D) Spark SQL
Answer: B

109. Hive is primarily designed for:
A) Online Transaction Processing (OLTP)
B) Real-time, low-latency queries
C) Batch processing and data warehousing (OLAP)
D) Graph processing
Answer: C

110. What is the core component of Hive that stores the metadata (schema, table names, column types) of Hive tables?
A) NameNode
B) DataNode
C) Metastore
D) HiveServer2
Answer: C

111. When a user executes a HiveQL query, what is the underlying execution engine that typically runs the job?
A) MapReduce
B) Apache Tez
C) Apache Spark
D) All of the above (depending on configuration)
Answer: D

112. What is the purpose of "partitioning" a Hive table?
A) To reduce the number of columns in the table
B) To divide the table into smaller, manageable parts based on column values, improving query performance
C) To increase the replication factor of the data
D) To ensure data uniqueness
Answer: B

113. Which of the following is a benefit of using Hive over writing raw MapReduce jobs?
A) Hive queries are always faster than custom MapReduce jobs.
B) Hive provides a familiar SQL interface, abstracting the complexity of MapReduce.
C) Hive supports random read/write operations.
D) Hive stores data in a proprietary format, independent of HDFS.
Answer: B

114. What is "bucketing" in Hive?
A) Dividing the data into partitions based on a column's value.
B) Dividing the data into a fixed number of buckets based on the hash of a column's value.
C) Storing the entire table in a single HDFS directory.
D) Compressing the data blocks.
Answer: B

115. Which Hive optimization technique involves performing a local aggregation on the map side before the shuffle phase, similar to a Combiner in MapReduce?
A) Bucketing
B) Partitioning
C) Optimizing with combiners
D) Indexing
Answer: C

116. Which type of join in Hive is most efficient when one table is significantly smaller than the other?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Self-join
Answer: B

117. What does the `EXTERNAL` keyword signify when creating a Hive table?
A) The table is stored outside of HDFS.
B) Hive manages the data and deletes it when the table is dropped.
C) Hive only manages the metadata; the data remains in its location when the table is dropped.
D) The table is encrypted.
Answer: C

118. Which of the following is a key feature of Hive evolution, moving beyond the initial MapReduce-only execution?
A) Integration with faster execution engines like Tez and Spark
B) Removal of the Metastore
C) Discontinuation of HiveQL
D) Transition to a NoSQL database
Answer: A

119. What is the primary use case for `INSERT OVERWRITE` in HiveQL?
A) To append new data to an existing table
B) To replace all existing data in a table or partition with new data
C) To update specific rows in a table
D) To create a new table from a query result
Answer: B

120. Which command is used to load data from a local file system into a Hive table?
A) `LOAD DATA INPATH`
B) `LOAD DATA LOCAL INPATH`
C) `INSERT INTO`
D) `SELECT * FROM`
Answer: B

121. What is the purpose of an index in Hive?
A) To store the actual data blocks
B) To speed up the retrieval of records by avoiding full table scans
C) To define the partitioning scheme
D) To enforce data integrity constraints
Answer: B

122. Which Hive feature allows users to define custom functions for complex data transformations that are not available in standard HiveQL?
A) UDFs (User Defined Functions)
B) UDTs (User Defined Types)
C) UDAFs (User Defined Aggregate Functions)
D) Both A and C
Answer: D

123. What is the main drawback of using Hive for data processing?
A) It cannot handle large volumes of data.
B) It is not suitable for low-latency, interactive queries.
C) It does not support a SQL-like interface.
D) It is not fault-tolerant.
Answer: B

124. Which component of Hive is responsible for accepting client connections and executing queries?
A) Metastore
B) HiveServer2
C) NameNode
D) DataNode
Answer: B

125. In a Map-side join, where does the smaller table reside during the join operation?
A) It is broadcast to all Mappers via the Distributed Cache.
B) It is stored in the NameNode's memory.
C) It is loaded into the Reducer's memory.
D) It is stored on a separate non-HDFS server.
Answer: A

126. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine for the query
B) To read and write data from HDFS in the specified format
C) To store the table metadata
D) To manage user authentication
Answer: B

127. Which HiveQL clause is used to filter rows based on a condition after the `GROUP BY` clause?
A) `WHERE`
B) `FILTER`
C) `HAVING`
D) `ORDER BY`
Answer: C

128. What is the default file format for Hive tables if not specified?
A) ORC
B) Parquet
C) TextFile
D) SequenceFile
Answer: C

## HBase (15 Questions)

129. HBase is a NoSQL database modeled after which Google technology?
A) Bigtable
B) MapReduce
C) GFS (Google File System)
D) Spanner
Answer: A

130. Which of the following best describes the HBase data model?
A) Relational, schema-on-write
B) Key-value store, schema-on-read
C) Column-oriented, sparse, distributed map
D) Document-oriented, JSON-based
Answer: C

131. HBase is primarily designed for:
A) Batch processing of large datasets
B) Random, real-time read/write access to billions of rows
C) Complex analytical queries (OLAP)
D) Storing unstructured video data
Answer: B

132. What is the primary role of the HMaster in HBase architecture?
A) Storing the actual data
B) Monitoring RegionServers and managing region assignments
C) Handling all client read/write requests
D) Running MapReduce jobs
Answer: B

133. Data in HBase is stored in which underlying file system?
A) Local file system
B) HDFS
C) NFS
D) S3
Answer: B

134. What is a "Region" in HBase?
A) A physical server in the cluster
B) A subset of the table's rows, distributed across RegionServers
C) A column family within a table
D) A single data block in HDFS
Answer: B

135. Which operation is used to retrieve a single row based on its row key in HBase?
A) `Scan`
B) `Put`
C) `Get`
D) `Delete`
Answer: C

136. What is the purpose of a "Column Family" in HBase?
A) To define the primary key for the table
B) To group related columns together, which are stored physically together
C) To enforce a strict schema on the data
D) To define the number of RegionServers
Answer: B

137. Which of the following is a key difference between HBase and a traditional RDBMS?
A) HBase supports ACID transactions across multiple rows.
B) HBase is schema-less and horizontally scalable.
C) HBase is optimized for complex joins.
D) HBase uses SQL as its primary query language.
Answer: B

138. The `Put` operation in the HBase Java client API is used for:
A) Retrieving data from the table
B) Inserting or updating data in the table
C) Deleting a row from the table
D) Scanning a range of rows
Answer: B

139. What is the role of the `WAL` (Write-Ahead Log) in HBase?
A) To store the table's metadata
B) To ensure data durability and recoverability in case of a RegionServer crash
C) To manage the cluster's security credentials
D) To store the final output of MapReduce jobs
Answer: B

140. HBase security often involves integration with which Hadoop security framework for authentication?
A) SSL/TLS
B) Kerberos
C) OAuth
D) Basic Authentication
Answer: B

141. Which operation is used to iterate over multiple rows in HBase, typically within a range of row keys?
A) `Get`
B) `Put`
C) `Scan`
D) `Increment`
Answer: C

142. What is the comparison between HBase and Apache Hive?
A) HBase is for batch processing; Hive is for real-time access.
B) HBase is a NoSQL database; Hive is a data warehousing layer.
C) Both are designed for OLTP.
D) Both use MapReduce as their only execution engine.
Answer: B

143. Which component of HBase is responsible for storing the actual data (key-value pairs) in memory before flushing to HDFS?
A) HMaster
B) MemStore
C) HFile
D) WAL
Answer: B

## Apache Spark (Core) (36 Questions)

144. What is the fundamental data structure in Apache Spark that represents an immutable, distributed collection of objects?
A) DataFrame
B) Dataset
C) Resilient Distributed Dataset (RDD)
D) SparkContext
Answer: C

145. Which of the following is a key advantage of Spark over traditional MapReduce?
A) Spark's ability to perform in-memory processing
B) Spark's reliance on disk I/O for all intermediate results
C) Spark's lack of fault tolerance
D) Spark's limited language support
Answer: A

146. What is the first step in initializing a Spark application?
A) Creating a SparkSession or SparkContext
B) Loading data into HDFS
C) Defining the RDD transformations
D) Submitting the job to YARN
Answer: A

147. RDD transformations are:
A) Operations that compute a result immediately
B) Operations that create a new RDD from an existing one, executed lazily
C) Operations that write data to an external system
D) Operations that modify the original RDD
Answer: B

148. Which of the following is an example of a Spark RDD action?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: C

149. What does the term "lazy evaluation" mean in the context of Spark RDDs?
A) Transformations are only executed when an action is called.
B) Spark waits for the user to manually trigger execution.
C) Spark only processes a small subset of the data.
D) Spark always reads the entire dataset into memory first.
Answer: A

150. Which component is responsible for coordinating the execution of a Spark application on a cluster?
A) Driver Program
B) Executor
C) Task
D) RDD
Answer: A

151. What is the primary role of an Executor in the Spark architecture?
A) To run the main application logic
B) To store the RDD metadata
C) To run tasks and store data in memory or on disk
D) To manage the cluster resources
Answer: C

152. Which RDD transformation is used to create a new RDD by passing each element of the source RDD through a function?
A) `filter()`
B) `map()`
C) `reduce()`
D) `groupByKey()`
Answer: B

153. The `filter()` transformation in Spark is used to:
A) Aggregate elements based on a key
B) Select elements that satisfy a given condition
C) Flatten the RDD structure
D) Count the number of elements
Answer: B

154. What is the purpose of the `union()` transformation?
A) To combine two RDDs by key
B) To combine two RDDs by appending the elements of one to the other
C) To remove duplicate elements from an RDD
D) To perform a SQL-like join
Answer: B

155. Which of the following is a common way to work with external datasets in Spark?
A) Reading files directly from HDFS or local file system
B) Connecting to JDBC/ODBC databases
C) Reading data from S3 or other cloud storage
D) All of the above
Answer: D

156. When passing functions to Spark, what is the primary consideration for the function to be serializable?
A) It must be written in Python.
B) It must be a lambda function.
C) It must be a standalone function or a method of a serializable class.
D) It must only use built-in Python types.
Answer: C

157. What is the key-value pair RDD transformation used to aggregate values by key using an associative and commutative function?
A) `groupByKey()`
B) `reduceByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

158. Which operation is generally preferred over `groupByKey()` for aggregation in Spark due to better performance and less data shuffling?
A) `map()`
B) `filter()`
C) `reduceByKey()`
D) `flatMap()`
Answer: C

159. What is a "shuffle operation" in Spark?
A) The process of randomly distributing data across the cluster.
B) The process of redistributing data across partitions, typically involving network I/O and disk I/O.
C) The process of sorting data within a single partition.
D) The process of reading data from HDFS.
Answer: B

160. What is the purpose of RDD persistence and caching?
A) To store the RDD data permanently on HDFS.
B) To keep the RDD data in memory or on disk for faster reuse in subsequent actions.
C) To prevent the RDD from being garbage collected.
D) To ensure the RDD is always recomputed from the source.
Answer: B

161. Which storage level is recommended for RDDs that need to be resilient to node failures while maximizing performance?
A) `DISK_ONLY`
B) `MEMORY_ONLY`
C) `MEMORY_AND_DISK`
D) `OFF_HEAP`
Answer: C

162. What is a "Broadcast Variable" in Spark?
A) A variable that is sent from the Driver to all Executors only once, allowing read-only access to a large dataset.
B) A variable that is constantly updated by all Executors.
C) A variable used for accumulating values.
D) A variable that stores the RDD metadata.
Answer: A

163. What is an "Accumulator" in Spark?
A) A variable used to distribute large, read-only data to all worker nodes.
B) A variable that is only updated by the Driver program.
C) A variable that is used to aggregate values across the cluster, such as counters or sums.
D) A variable that stores the final result of the job.
Answer: C

164. What is the main difference between RDDs and DataFrames/Datasets?
A) RDDs are structured; DataFrames are unstructured.
B) RDDs are schema-aware; DataFrames are not.
C) DataFrames/Datasets provide a schema and are optimized by the Catalyst optimizer; RDDs are not.
D) RDDs are only available in Python; DataFrames are only in Scala.
Answer: C

165. Which of the following is a job optimization technique in Spark?
A) Increasing the number of shuffle operations
B) Minimizing data shuffling by using appropriate transformations
C) Disabling RDD caching
D) Running all tasks on a single core
Answer: B

166. The `coalesce()` transformation is used to:
A) Increase the number of partitions in an RDD
B) Decrease the number of partitions in an RDD to avoid excessive shuffling
C) Combine two RDDs
D) Sort the data within partitions
Answer: B

167. What is the purpose of the `repartition()` transformation?
A) To change the number of partitions, which always involves a full shuffle.
B) To change the number of partitions without a shuffle.
C) To remove duplicate records.
D) To sort the data by key.
Answer: A

168. When working with key-value pairs, which transformation is used to apply a function to the value of each pair without changing the key?
A) `map()`
B) `mapValues()`
C) `flatMap()`
D) `reduceByKey()`
Answer: B

169. What is the primary function of the Catalyst Optimizer in Spark?
A) To manage the cluster resources
B) To convert a logical execution plan into an optimized physical execution plan
C) To store the RDD data in memory
D) To handle task failures
Answer: B

170. Which of the following is a common operation for removing data from an RDD?
A) `delete()`
B) `remove()`
C) Applying a `filter()` transformation to exclude unwanted elements
D) `drop()`
Answer: C

171. What is the purpose of the `cache()` method on an RDD?
A) To mark the RDD to be persisted using the default storage level (`MEMORY_ONLY`).
B) To write the RDD to HDFS.
C) To immediately execute all transformations.
D) To clear the RDD from memory.
Answer: A

172. What is the difference between `map()` and `flatMap()`?
A) `map()` returns a single element for each input element; `flatMap()` can return zero or more elements.
B) `map()` is an action; `flatMap()` is a transformation.
C) `map()` is only for key-value pairs; `flatMap()` is for all RDDs.
D) `map()` is eager; `flatMap()` is lazy.
Answer: A

173. Which Spark component is responsible for breaking down the RDD graph into stages and tasks?
A) SparkContext
B) DAGScheduler
C) TaskScheduler
D) ResourceManager
Answer: B

174. What is the main purpose of using `collect()` as an action?
A) To write the RDD to HDFS.
B) To return all elements of the RDD to the Driver program.
C) To count the number of elements.
D) To perform a local aggregation.
Answer: B

175. Which language is Spark's core engine primarily written in?
A) Python
B) Java
C) Scala
D) R
Answer: C

176. What is the primary mechanism for fault tolerance in RDDs?
A) Checkpointing the data to disk after every transformation.
B) The lineage graph, which allows RDDs to be recomputed from the source data upon failure.
C) Data replication across all worker nodes.
D) Using the Write-Ahead Log (WAL).
Answer: B

177. Which Spark utility is used for interactive data analysis and development?
A) Spark-submit
B) Spark Shell (e.g., PySpark)
C) Spark History Server
D) Spark UI
Answer: B

178. What is the difference between a transformation and an action in Spark?
A) Transformations are executed immediately; actions are executed lazily.
B) Transformations define the computation; actions trigger the computation and return a result.
C) Transformations can only be applied to DataFrames; actions can only be applied to RDDs.
D) Transformations modify the data; actions do not.
Answer: B

179. What is the purpose of the `take(n)` action?
A) To return all elements of the RDD.
B) To return the first `n` elements of the RDD to the Driver program.
C) To return a random sample of `n` elements.
D) To return the last `n` elements.
Answer: B

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

180. Spark Streaming processes data using which fundamental abstraction?
A) RDDs
B) DStreams (Discretized Streams)
C) DataFrames
D) Micro-batches
Answer: B

181. Spark MLlib is the component of Spark dedicated to:
A) Machine Learning
B) Data Visualization
C) Graph Processing
D) Stream Processing
Answer: A

182. What is the primary purpose of Spark SQL?
A) To provide a SQL interface for querying structured and semi-structured data
B) To replace traditional relational databases
C) To manage the cluster resources
D) To handle real-time event processing
Answer: A

183. Which Spark abstraction is the entry point for working with structured data, including DataFrames and Datasets?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

184. Spark MLlib's API is divided into two packages: the older RDD-based API and the newer, more feature-rich:
A) DataFrame-based API
B) DStream-based API
C) GraphX API
D) SQL-based API
Answer: A

185. Spark Streaming processes data as a sequence of small, time-based RDDs, a concept known as:
A) Continuous Processing
B) Micro-batching
C) Event-at-a-time Processing
D) Infinite Stream
Answer: B

186. Which Spark component is used for performing Exploratory Data Analysis (EDA) using Python?
A) SparkContext
B) PySpark
C) SparkR
D) Spark Streaming
Answer: B

## Spark & Kafka Integration (9 Questions)

187. Apache Kafka is a distributed streaming platform primarily used for:
A) Long-term data storage
B) Building real-time data pipelines and streaming applications
C) Running complex analytical queries
D) Managing cluster resources
Answer: B

188. In Kafka, what is a "Topic"?
A) A category or feed name to which records are published
B) A physical server in the cluster
C) A single message in the stream
D) A type of consumer
Answer: A

189. What is the role of a "Kafka Producer"?
A) To consume messages from a topic
B) To publish messages to a topic
C) To store the messages permanently
D) To manage the Kafka cluster
Answer: B

190. How does Spark typically integrate with Kafka for stream processing?
A) Spark reads data directly from Kafka topics using a dedicated connector.
B) Spark uses HDFS as an intermediary storage for Kafka data.
C) Kafka runs MapReduce jobs to process Spark data.
D) Spark and Kafka cannot be integrated.
Answer: A

191. What is the purpose of the `Kafka Connect API`?
A) To write custom Kafka Producers and Consumers
B) To simplify the integration of Kafka with other data systems (e.g., databases, file systems)
C) To manage the security of the Kafka cluster
D) To perform real-time data transformation
Answer: B

192. In Kafka, what is a "Consumer Group"?
A) A single consumer instance
B) A set of consumers that jointly consume a set of topics
C) A group of producers
D) A physical cluster of Kafka brokers
Answer: B

193. What is the main benefit of using Spark Streaming with Kafka?
A) Kafka provides the reliable, fault-tolerant ingestion layer, and Spark provides the powerful, scalable processing engine.
B) Spark replaces the need for Kafka brokers.
C) Kafka performs all the data transformation.
D) Spark allows Kafka to run on commodity hardware.
Answer: A

194. Which of the following is a key concept in Kafka that ensures messages within a topic are ordered?
A) Broker
B) Partition
C) Consumer Group
D) Producer
Answer: B

195. What is the role of a "Kafka Broker"?
A) A server that stores and manages the published messages
B) A client that publishes messages
C) A client that consumes messages
D) A tool for monitoring the cluster
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

196. Which of the following is a primary reason to choose Spark over MapReduce for iterative algorithms (e.g., Machine Learning)?
A) MapReduce is easier to program.
B) Spark's in-memory caching avoids repeated disk I/O between iterations.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

197. What is the main advantage of MapReduce's disk-based intermediate storage over Spark's in-memory storage for certain workloads?
A) Faster execution time
B) Better handling of jobs that require more memory than is available in the cluster
C) Simpler programming model
D) Higher data locality
Answer: B

198. When connecting a database (e.g., MySQL) with Spark, which technology is typically used to facilitate the connection?
A) ODBC
B) JDBC
C) SSH
D) FTP
Answer: B

199. What is the key difference in the execution model between MapReduce and Spark?
A) MapReduce uses a single-stage execution; Spark uses a two-stage execution.
B) MapReduce is a single-pass job; Spark can chain multiple operations in a single job (DAG).
C) MapReduce is only for batch; Spark is only for streaming.
D) MapReduce is based on RDDs; Spark is based on HDFS.
Answer: B

200. When reading data from a relational database into Spark, what is a common technique to improve parallelism and performance?
A) Reading the entire table in a single thread
B) Specifying a column and boundary values to partition the read operation
C) Disabling the Spark Catalyst Optimizer
D) Using a single Executor
Answer: B
# Batch 2: Q201–Q400

## Introduction to Big Data (17 Questions)

201. Which term is often used to describe the challenge of integrating data from disparate sources with varying structures and formats?
A) Data Volume
B) Data Velocity
C) Data Variety
D) Data Veracity
Answer: C

202. The concept of "Big Data skills and ecosystem roles" highlights the need for professionals who can bridge the gap between:
A) Hardware and software
B) Business strategy and technical implementation
C) Data storage and data transfer
D) Batch processing and streaming
Answer: B

203. Which of the following is a primary source of Big Data generated by human interaction with digital systems?
A) Satellite imagery
B) Social media feeds and web logs
C) Scientific simulation data
D) Machine sensor data
Answer: B

204. The "evolving data repositories" trend suggests a move towards storage systems that are:
A) Highly normalized and structured
B) Flexible, scalable, and capable of handling diverse data types
C) Limited to on-premise infrastructure
D) Optimized for single-threaded access
Answer: B

205. Which of the following is a challenge associated with the "Volume" of Big Data?
A) Ensuring data quality
B) Designing scalable storage and retrieval systems
C) Processing data in real-time
D) Integrating different data formats
Answer: B

206. What is the main goal of "data curation" in a Big Data repository?
A) To delete old and irrelevant data
B) To manage, preserve, and enhance the value of data over its lifecycle
C) To encrypt all data for security
D) To convert all data to a single, proprietary format
Answer: B

207. The term "Big Data" is generally defined as datasets whose size is beyond the ability of:
A) A single server to store
B) Traditional database software tools to capture, manage, and process within a tolerable elapsed time
C) A single organization to generate
D) Cloud computing resources to handle
Answer: B

208. Which Big Data characteristic is most relevant to fraud detection systems that must analyze transactions as they occur?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: B

209. Which of the following is an example of a "dark data" source that contributes to Big Data volume?
A) Real-time stock market data
B) Data stored in legacy systems or archives that is rarely accessed but still holds potential value
C) Publicly available open-source datasets
D) Data actively used in a production database
Answer: B

210. Which Big Data skill is most closely related to the "Variety" challenge?
A) Optimizing SQL queries
B) Developing parsers and serializers for diverse data formats
C) Managing network latency
D) Configuring HDFS replication
Answer: B

211. What is the primary business driver for companies to invest in Big Data analytics?
A) Compliance with government regulations
B) Gaining a competitive advantage through deeper customer insights and operational efficiency
C) Reducing the need for human analysts
D) Replacing all existing IT infrastructure
Answer: B

212. Which of the following is a common implication of Big Data on data governance?
A) The need for more flexible and dynamic data policies
B) The elimination of all data security concerns
C) A return to centralized, monolithic data architectures
D) A reduction in the complexity of data access
Answer: A

213. The concept of "Data Sharing and Reuse" is crucial for:
A) Preventing data from being stored in the cloud
B) Maximizing the return on investment (ROI) from collected data
C) Minimizing the need for data backup
D) Ensuring data is only used for its original purpose
Answer: B

214. Which of the following is a key challenge in ensuring the "Veracity" of sensor data?
A) The high volume of data generated
B) The potential for sensor malfunction or calibration errors
C) The need for high-speed processing
D) The diverse formats of the sensor data
Answer: B

215. What is the primary difference between a "data warehouse" and a "data lake"?
A) A data warehouse stores raw data; a data lake stores processed data.
B) A data warehouse is schema-on-write; a data lake is schema-on-read.
C) A data warehouse is optimized for OLTP; a data lake is optimized for OLAP.
D) A data warehouse is always on-premise; a data lake is always in the cloud.
Answer: B

216. Which of the following is a characteristic of "structured data"?
A) It is typically stored in its raw, native format.
B) It conforms to a fixed schema, such as a relational table.
C) It includes text, images, and video.
D) It is difficult to query using traditional tools.
Answer: B

217. Which Big Data skill involves the ability to design, build, and manage the infrastructure and pipelines for data movement and processing?
A) Data Analysis
B) Data Engineering
C) Business Intelligence
D) Data Science
Answer: B

## Hadoop Fundamentals (16 Questions)

218. Which of the following is the primary goal of the YARN framework in Hadoop 2.x?
A) To replace HDFS with a new file system
B) To separate the resource management layer from the processing layer
C) To eliminate the need for MapReduce
D) To provide a NoSQL database
Answer: B

219. In YARN, what is the role of the `ResourceManager`?
A) To execute application code
B) To manage the global allocation of resources across the cluster
C) To store the application logs
D) To monitor the health of individual nodes
Answer: B

220. The `NodeManager` in YARN is responsible for:
A) Arbitrating resources between competing applications
B) Managing the resources and containers on a single node
C) Storing the file system metadata
D) Submitting jobs to the cluster
Answer: B

221. Which design principle of HDFS allows it to handle hardware failures gracefully?
A) Data locality
B) High availability
C) Fault tolerance through replication
D) Write-once, read-many
Answer: C

222. What is the typical size of a data block in HDFS?
A) 32 KB
B) 64 MB
C) 128 MB
D) 1 GB
Answer: C

223. The `NameNode` maintains the file system tree and which other critical information?
A) The actual data blocks
B) The list of DataNodes that store each block
C) The application execution logs
D) The user authentication credentials
Answer: B

224. Which of the following is a key feature of the Hadoop ecosystem that enables data transfer between Hadoop and relational databases?
A) Pig
B) Hive
C) Sqoop
D) Flume
Answer: C

225. Which Hadoop component is used for collecting, aggregating, and moving large amounts of log data from many sources into HDFS?
A) Sqoop
B) Flume
C) Oozie
D) ZooKeeper
Answer: B

226. What is the primary purpose of Apache ZooKeeper in the Hadoop ecosystem?
A) Distributed coordination service for configuration information, naming, and synchronization
B) Data processing engine
C) File system storage
D) SQL query engine
Answer: A

227. Which of the following is a characteristic of commodity hardware used in a Hadoop cluster?
A) High cost and specialized components
B) Low cost and prone to failure
C) High-speed, low-latency network interfaces
D) Optimized for single-threaded performance
Answer: B

228. The concept of "data locality" in Hadoop is crucial because:
A) It reduces the need for data replication.
B) It minimizes network congestion by processing data where it is stored.
C) It ensures data is stored on the fastest disks.
D) It simplifies the NameNode's job.
Answer: B

229. What is the role of the `ApplicationMaster` in a YARN application?
A) To manage the global cluster resources
B) To negotiate resources from the ResourceManager and monitor the application's execution
C) To store the application's input data
D) To execute the Map and Reduce tasks
Answer: B

230. Which of the following is a key benefit of using a Hadoop distribution (e.g., Cloudera, Hortonworks) over the Apache open-source version?
A) Guaranteed lower cost
B) Commercial support, management tools, and integrated components
C) Exclusive access to the HDFS source code
D) Elimination of the NameNode
Answer: B

231. The `hadoop-env.sh` file is used to set environment variables, most importantly:
A) `HADOOP_HOME`
B) `JAVA_HOME`
C) `HDFS_HOME`
D) `YARN_HOME`
Answer: B

232. What is the main difference between a "pseudo-distributed" and a "fully distributed" Hadoop setup?
A) Pseudo-distributed runs all daemons on one machine; fully distributed runs daemons across multiple machines.
B) Pseudo-distributed uses MapReduce; fully distributed uses Spark.
C) Pseudo-distributed uses HDFS; fully distributed uses a local file system.
D) Pseudo-distributed is for production; fully distributed is for testing.
Answer: A

233. Which Hadoop component is responsible for managing the flow of data between different parts of the ecosystem?
A) HDFS
B) YARN
C) MapReduce
D) Oozie (for workflow scheduling)
Answer: D

## HDFS Deep Dive (15 Questions)

234. Which HDFS command is used to create a new directory in the HDFS file system?
A) `hdfs dfs -mkdir`
B) `hdfs dfs -touch`
C) `hdfs dfs -create`
D) `hdfs dfs -newdir`
Answer: A

235. When a client reads a file from HDFS, which node does it first contact to get the list of DataNodes holding the file's blocks?
A) DataNode
B) Secondary NameNode
C) NameNode
D) ResourceManager
Answer: C

236. The HDFS `fsimage` file contains:
A) A complete record of all file system modifications since the last checkpoint.
B) The entire file system namespace, including file and directory metadata.
C) The actual data blocks of the files.
D) The cluster configuration settings.
Answer: B

237. The HDFS `edit log` (or Journal) contains:
A) The actual data blocks of the files.
B) A persistent, transaction log of all file system changes since the last `fsimage`.
C) The list of all DataNodes.
D) The user access logs.
Answer: B

238. What is the process of merging the `edit log` with the `fsimage` to create a new, up-to-date `fsimage` called?
A) Replication
B) Checkpointing
C) Formatting
D) Balancing
Answer: B

239. In a highly available (HA) HDFS setup, what is the role of the `JournalNode`?
A) To store the actual data blocks.
B) To store and synchronize the `edit log` between the Active and Standby NameNodes.
C) To execute MapReduce tasks.
D) To manage the cluster resources.
Answer: B

240. Which HDFS command is used to remove a file or directory from HDFS?
A) `hdfs dfs -rm`
B) `hdfs dfs -delete`
C) `hdfs dfs -erase`
D) `hdfs dfs -remove`
Answer: A

241. What is the primary reason HDFS is not suitable for low-latency data access (e.g., random reads of small files)?
A) The high overhead of contacting the NameNode for every block location.
B) The lack of a Java API.
C) The use of commodity hardware.
D) The inability to store small files.
Answer: A

242. The HDFS Java API uses which stream class for writing data to HDFS?
A) `FSDataOutputStream`
B) `FileOutputStream`
C) `HDFSOutputStream`
D) `DataOutputStream`
Answer: A

243. What is the purpose of the `DataNode` sending a "Block Report" to the `NameNode`?
A) To request new data blocks to store.
B) To inform the NameNode of all the data blocks it currently stores.
C) To report a hardware failure.
D) To receive new configuration settings.
Answer: B

244. Which HDFS command is used to copy files between two different HDFS clusters?
A) `hdfs dfs -cp`
B) `hdfs dfs -distcp`
C) `hdfs dfs -copy`
D) `hdfs dfs -transfer`
Answer: B

245. What is the concept of "Rack Awareness" designed to optimize?
A) Data security
B) Network bandwidth utilization and fault tolerance
C) CPU utilization
D) Disk space usage
Answer: B

246. When a DataNode is decommissioned, what process does the NameNode initiate?
A) Immediate deletion of all blocks on the DataNode.
B) Replication of all blocks on the DataNode to other DataNodes.
C) A full cluster restart.
D) A manual intervention request.
Answer: B

247. What is the main benefit of the HDFS "write-once, read-many" model?
A) It allows for frequent updates to files.
B) It simplifies the data consistency model and enables high-throughput data access.
C) It reduces the need for data replication.
D) It is optimized for transactional workloads.
Answer: B

248. Which HDFS command is used to check the health and status of the file system?
A) `hdfs dfs -ls`
B) `hdfs fsck`
C) `hdfs dfs -stat`
D) `hdfs dfs -health`
Answer: B

## MapReduce (25 Questions)

249. What is the fundamental unit of input for a MapReduce job?
A) A file
B) A block
C) An InputSplit
D) A record
Answer: C

250. The `InputSplit` is conceptually a pointer to:
A) The physical location of the data on disk.
B) The logical representation of the data that will be processed by a single Mapper.
C) The final output file.
D) The NameNode's metadata.
Answer: B

251. Which of the following is a key responsibility of the `Partitioner`?
A) To ensure that all records with the same key go to the same Reducer.
B) To divide the input file into splits.
C) To sort the keys within a partition.
D) To perform local aggregation.
Answer: A

252. In the MapReduce job execution flow, the output of the `Mapper` is written to:
A) HDFS
B) The Reducer's input buffer
C) The local disk of the DataNode running the Mapper
D) The NameNode's memory
Answer: C

253. What is the primary function of the `Sort` phase in MapReduce?
A) To sort the input data before the Map phase.
B) To sort the intermediate key-value pairs by key before they are passed to the Reducer.
C) To sort the final output data.
D) To sort the DataNodes by capacity.
Answer: B

254. Which MapReduce data type is used for representing a sequence of bytes?
A) `Text`
B) `IntWritable`
C) `BytesWritable`
D) `LongWritable`
Answer: C

255. What is the main purpose of the `JobConf` object in the older MapReduce API?
A) To store the cluster's security credentials.
B) To configure the job's parameters, such as the Mapper and Reducer classes.
C) To manage the cluster resources.
D) To store the input data.
Answer: B

256. Which of the following is a common MapReduce job scheduling algorithm?
A) First-In, First-Out (FIFO)
B) Capacity Scheduler
C) Fair Scheduler
D) All of the above (in YARN)
Answer: D

257. How does MapReduce handle a slow-running task (straggler)?
A) It immediately kills the task.
B) It launches a duplicate task on another node (speculative execution).
C) It increases the priority of the slow task.
D) It waits indefinitely for the task to complete.
Answer: B

258. What is the primary role of the `RecordWriter` in MapReduce?
A) To read the input records.
B) To write the final output key-value pairs to the output file.
C) To write the intermediate data to the local disk.
D) To manage the HDFS file system.
Answer: B

259. Which of the following is a characteristic of the `Combiner`?
A) It must be run on all MapReduce jobs.
B) It is an optional optimization that runs on the Map side.
C) It runs on the Reduce side.
D) It is responsible for the final output.
Answer: B

260. The `Shuffle` phase in MapReduce is responsible for:
A) Randomly distributing the data.
B) Transferring the intermediate data from the Mappers' local disks to the Reducers' input buffers.
C) Sorting the data.
D) Performing the final aggregation.
Answer: B

261. What is the main reason for using a custom `Partitioner`?
A) To ensure a more balanced distribution of keys to Reducers, preventing data skew.
B) To reduce the total number of Reducers.
C) To increase the replication factor.
D) To perform a local aggregation.
Answer: A

262. Which of the following is an advanced MapReduce feature that allows the user to define a custom grouping of keys before they are passed to the Reducer?
A) `Partitioner`
B) `Combiner`
C) `GroupingComparator`
D) `SortComparator`
Answer: C

263. In the context of MapReduce, what is a "side-effect" file?
A) A file created by the Mapper or Reducer that is not part of the final job output.
B) The `fsimage` file.
C) The `edit log`.
D) The input file.
Answer: A

264. Which of the following is a limitation of the MapReduce programming model?
A) It is not fault-tolerant.
B) It is not suitable for iterative algorithms due to the high cost of writing intermediate results to HDFS.
C) It cannot handle unstructured data.
D) It only supports Java.
Answer: B

265. The `Map` function's output is a set of:
A) Final result records.
B) Intermediate key-value pairs.
C) Input splits.
D) Configuration settings.
Answer: B

266. What is the purpose of the `Counters` feature in MapReduce?
A) To count the number of Mappers and Reducers.
B) To track the progress and statistics of the job execution.
C) To count the number of input files.
D) To count the number of DataNodes.
Answer: B

267. Which of the following is a key characteristic of the `Reduce` function?
A) It is executed once for every input record.
B) It is executed once for every unique key.
C) It is executed once for every DataNode.
D) It is executed once for every input split.
Answer: B

268. The `JobClient` in the older MapReduce API is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `JobTracker`.
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

269. What is the main difference between `SortComparator` and `GroupingComparator`?
A) `SortComparator` is used to sort the keys; `GroupingComparator` is used to group the keys.
B) `SortComparator` is used on the Map side; `GroupingComparator` is used on the Reduce side.
C) `SortComparator` is mandatory; `GroupingComparator` is optional.
D) `SortComparator` is used for the final output; `GroupingComparator` is used for intermediate data.
Answer: A

270. Which of the following is a valid MapReduce data type for representing a floating-point number?
A) `IntWritable`
B) `FloatWritable`
C) `Text`
D) `LongWritable`
Answer: B

271. What is the main benefit of using the `Distributed Cache`?
A) It allows large, read-only files to be efficiently distributed to all nodes running MapReduce tasks.
B) It provides a mechanism for storing the final output.
C) It caches the intermediate data on the Reducer side.
D) It caches the NameNode's metadata.
Answer: A

272. Which MapReduce feature allows the user to skip corrupt records during processing?
A) Speculative Execution
B) Skip Bad Records
C) Fault Tolerance
D) Checkpointing
Answer: B

273. The `MapReduce` programming model is fundamentally based on which two functional programming concepts?
A) Filter and Sort
B) Map and Reduce
C) Group and Aggregate
D) Select and Project
Answer: B

## Event/Complex Stream Processing (4 Questions)

274. Which of the following best defines "Event Stream Processing"?
A) Processing a fixed, finite collection of data records.
B) Processing an unbounded, continuous flow of data records.
C) Processing data only after it has been stored in a database.
D) Processing data only on a scheduled, nightly basis.
Answer: B

275. Complex Event Processing (CEP) is primarily focused on:
A) Storing large volumes of historical data.
B) Identifying meaningful patterns or correlations among multiple events in real-time.
C) Running batch ETL jobs.
D) Generating static reports.
Answer: B

276. Which technology is a popular open-source framework for stream processing that can be integrated with Big Data ecosystems?
A) Apache Flink
B) Apache Hive
C) Apache Pig
D) Apache Sqoop
Answer: A

277. A key requirement for event stream processing systems is:
A) High latency
B) Low latency and high throughput
C) Low throughput and high latency
D) Manual intervention for every event
Answer: B

## Hadoop Environment & Administration (15 Questions)

278. Which of the following is a common task when administering a Hadoop cluster to ensure optimal performance?
A) Manually deleting old data blocks
B) Running the HDFS Balancer to evenly distribute data across DataNodes
C) Disabling the NameNode
D) Increasing the replication factor to 1
Answer: B

279. What is the purpose of the `hadoop-metrics2.properties` file?
A) To configure the cluster's security settings.
B) To configure the metrics system for collecting operational data.
C) To define the environment variables.
D) To list the DataNodes.
Answer: B

280. Which Hadoop security concept involves tracking user actions for compliance and troubleshooting?
A) Authentication
B) Authorization
C) Auditing
D) Encryption
Answer: C

281. What is the primary method for a client to authenticate with a secure Hadoop cluster?
A) Basic username/password
B) Kerberos
C) OAuth 2.0
D) API Key
Answer: B

282. The `dfs.namenode.handler.count` property in `hdfs-site.xml` is used to configure:
A) The number of DataNodes in the cluster.
B) The number of threads the NameNode uses to handle client requests.
C) The number of blocks per file.
D) The number of file system checks per day.
Answer: B

283. What is the main challenge in "cluster specification and sizing"?
A) Determining the exact amount of RAM needed for the NameNode.
B) Accurately predicting the future data growth and processing requirements.
C) Choosing the operating system.
D) Deciding on the default block size.
Answer: B

284. Which YARN configuration property defines the maximum memory that can be allocated for a single container on a NodeManager?
A) `yarn.nodemanager.resource.memory-mb`
B) `yarn.scheduler.maximum-allocation-mb`
C) `yarn.app.mapreduce.am.resource.mb`
D) `yarn.scheduler.minimum-allocation-mb`
Answer: B

285. What is the purpose of the `log4j.properties` file in Hadoop?
A) To configure the logging levels and destinations for Hadoop daemons.
B) To store the cluster's security logs.
C) To define the environment variables.
D) To store the HDFS metadata.
Answer: A

286. Which of the following is a common Hadoop benchmark used to test the I/O performance of the cluster?
A) Terasort
B) WordCount
C) Pi Estimator
D) All of the above
Answer: A

287. When administering a Hadoop cluster, what is the process of temporarily taking a DataNode out of service for maintenance without losing data?
A) Formatting
B) Decommissioning
C) Replicating
D) Balancing
Answer: B

288. Which YARN component is responsible for maintaining a history of all completed applications?
A) ResourceManager
B) NodeManager
C) JobHistory Server
D) ApplicationMaster
Answer: C

289. What is the primary security risk associated with a Hadoop cluster that is not properly secured?
A) Data loss due to hardware failure
B) Unauthorized access to sensitive data stored in HDFS
C) Slow job execution
D) Inefficient resource utilization
Answer: B

290. Which of the following is a common method for monitoring the health and performance of a Hadoop cluster?
A) Using the built-in Web UIs (e.g., NameNode UI, ResourceManager UI)
B) Using external monitoring tools (e.g., Prometheus, Grafana)
C) Checking the log files
D) All of the above
Answer: D

291. What is the main benefit of using a High Availability (HA) setup for the NameNode?
A) It increases the cluster's storage capacity.
B) It eliminates the single point of failure associated with the NameNode.
C) It speeds up the MapReduce execution.
D) It reduces the need for data replication.
Answer: B

292. Which Hadoop configuration file is used to specify the number of Map and Reduce tasks that can run concurrently on a node?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: D

## Apache Airflow / ETL / Informatica (15 Questions)

293. In the context of ETL, what does the "Extract" phase involve?
A) Cleaning and transforming the data.
B) Reading data from source systems.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

294. Which of the following is a characteristic of a "data lake" that makes it suitable for ELT?
A) It enforces a strict schema upon data ingestion.
B) It is designed to store data in its raw format, allowing transformation to occur later.
C) It is optimized for low-latency transactional updates.
D) It only supports structured data.
Answer: B

295. Which component in Apache Airflow represents a single execution unit within a DAG?
A) Sensor
B) Operator
C) Hook
D) Task
Answer: D

296. What is the primary function of a "Hook" in Apache Airflow?
A) To define the dependencies between tasks.
B) To interact with external systems (e.g., databases, cloud services).
C) To define the schedule of the DAG.
D) To perform data transformation.
Answer: B

297. Which of the following is a key advantage of using a data warehouse over a traditional operational database for reporting?
A) Faster transactional processing
B) Optimized for complex, historical, and aggregated queries
C) Real-time data updates
D) Lower storage costs
Answer: B

298. The process of "data cleansing" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

299. What is the main difference between a "data mart" and a "data warehouse"?
A) A data mart is larger and more complex.
B) A data mart is a subset of the data warehouse, focused on a specific business function or department.
C) A data mart is optimized for transactional processing.
D) A data mart is always cloud-based.
Answer: B

300. Which of the following is a core concept of workflow orchestration?
A) Manual execution of all steps
B) Defining dependencies and execution order for a series of tasks
C) Storing the data
D) Performing real-time stream processing
Answer: B

301. Informatica PowerCenter is primarily used for:
A) Data visualization
B) Data integration and ETL
C) Machine learning model training
D) Web development
Answer: B

302. Which of the following is a common challenge in designing ETL data pipelines?
A) Ensuring data quality and consistency across disparate sources
B) Finding enough storage space
C) Choosing the right programming language
D) Deciding on the replication factor
Answer: A

303. In Apache Airflow, what does a "Sensor" task do?
A) It performs a data transformation.
B) It waits for a specific condition to be met (e.g., a file to appear, a time to pass) before proceeding.
C) It executes a shell command.
D) It interacts with an external database.
Answer: B

304. Which of the following is a key characteristic of a "data lake" that supports the "schema-on-read" approach?
A) Data is stored in a highly structured, predefined format.
B) The schema is applied at the time the data is queried, not when it is stored.
C) All data must be normalized before ingestion.
D) It only supports SQL queries.
Answer: B

305. What is the primary purpose of "data governance" in a Big Data environment?
A) To manage the physical hardware.
B) To ensure data quality, security, and compliance throughout the data lifecycle.
C) To write the ETL code.
D) To perform data visualization.
Answer: B

306. When designing an ETL pipeline, what is the main consideration for the "Load" phase?
A) The speed and efficiency of writing the transformed data to the target system.
B) The complexity of the transformation logic.
C) The number of source systems.
D) The programming language used.
Answer: A

307. Which of the following is a common open-source alternative to Informatica for ETL?
A) Apache Kafka
B) Talend Open Studio
C) Apache HBase
D) Apache ZooKeeper
Answer: B

## Apache Hive (21 Questions)

308. What is the main advantage of using `ORC` or `Parquet` file formats over `TextFile` in Hive?
A) They are easier to read by humans.
B) They are columnar storage formats, offering better compression and query performance.
C) They are only supported by MapReduce.
D) They do not require a Metastore.
Answer: B

309. When a HiveQL query is executed, the `Hive Driver` is responsible for:
A) Storing the data in HDFS.
B) Converting the HiveQL query into a series of execution stages (e.g., MapReduce, Tez, or Spark jobs).
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

310. What is the purpose of the `HiveServer2`?
A) To store the Metastore database.
B) To allow remote clients (e.g., JDBC/ODBC) to submit queries to Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

311. Which of the following is a key characteristic of a Hive `Managed Table`?
A) Hive only manages the metadata.
B) Hive manages both the metadata and the data; dropping the table deletes the data from HDFS.
C) The data is stored outside of HDFS.
D) It cannot be partitioned.
Answer: B

312. Which HiveQL clause is used to sort the data globally across all reducers?
A) `SORT BY`
B) `ORDER BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

313. What is the main benefit of using `SORT BY` over `ORDER BY` in Hive?
A) `SORT BY` guarantees a single, globally ordered result.
B) `SORT BY` performs a local sort within each reducer, which is faster and avoids a single global sort.
C) `SORT BY` can only be used with partitioned tables.
D) `SORT BY` is only supported by the Tez engine.
Answer: B

314. Which Hive feature allows for the creation of tables that read data from external systems (e.g., HBase, JDBC)?
A) Managed Tables
B) External Tables
C) Storage Handlers
D) Views
Answer: C

315. What is the primary purpose of the `DISTRIBUTE BY` clause in Hive?
A) To ensure a global sort order.
B) To control how the output of the Map phase is partitioned among the Reducers.
C) To define the partitioning scheme of the table.
D) To define the bucketing scheme of the table.
Answer: B

316. Which of the following is a valid use case for a Hive `View`?
A) To store data permanently in HDFS.
B) To simplify complex queries and apply consistent business logic without storing redundant data.
C) To enforce a global sort order.
D) To manage the cluster resources.
Answer: B

317. What is the main drawback of using `indexing` in Hive?
A) It slows down query execution.
B) It requires significant overhead to create and maintain.
C) It can only be used on external tables.
D) It is not supported by the MapReduce engine.
Answer: B

318. Which HiveQL command is used to add a new partition to an existing partitioned table?
A) `ALTER TABLE ADD PARTITION`
B) `INSERT INTO TABLE`
C) `CREATE PARTITION`
D) `LOAD DATA`
Answer: A

319. What is the purpose of the `LATERAL VIEW explode()` function in Hive?
A) To perform a complex join operation.
B) To transform array or map columns into separate rows.
C) To create a new table from a query result.
D) To define a User Defined Function (UDF).
Answer: B

320. Which of the following is a common case study for Hive ingestion and warehousing?
A) Real-time stock trading
B) Building a centralized log analysis platform for historical data
C) High-frequency transactional processing
D) Graph traversal algorithms
Answer: B

321. What is the primary function of the `Hive Metastore`?
A) To execute the queries.
B) To provide a centralized repository for table and partition metadata.
C) To store the actual data.
D) To manage the cluster security.
Answer: B

322. Which of the following is a type of join that can be optimized by Hive to run on the Map side?
A) Full Outer Join
B) Left Semi Join
C) Map Join (when one table is small enough to fit in memory)
D) Cross Join
Answer: C

323. What is the main benefit of using `bucketing` in Hive?
A) It reduces the number of partitions.
B) It enables efficient sampling and bucket-to-bucket joins.
C) It ensures a global sort order.
D) It simplifies the query syntax.
Answer: B

324. Which HiveQL command is used to check the execution plan of a query?
A) `SELECT`
B) `EXPLAIN`
C) `DESCRIBE`
D) `SHOW`
Answer: B

325. What is the role of the `SerDe` in reading data from a Hive table?
A) It serializes the data into the internal Hive format.
B) It deserializes the raw data from HDFS into the format defined by the table schema.
C) It manages the HDFS file system.
D) It executes the query.
Answer: B

326. Which of the following is a valid HiveQL data type for storing a large block of text?
A) `INT`
B) `VARCHAR`
C) `STRING`
D) `TINYINT`
Answer: C

327. What is the main difference between a `Managed Table` and an `External Table` in terms of data loading?
A) Data can only be loaded into Managed Tables.
B) Data can only be loaded into External Tables.
C) Data loaded into a Managed Table is moved to the Hive warehouse directory; data loaded into an External Table remains in its original HDFS location.
D) There is no difference.
Answer: C

328. Which Hive feature allows users to define a custom function that aggregates a set of values and returns a single value?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: C

## HBase (15 Questions)

329. In HBase, what is the primary access method for data retrieval?
A) Sequential scan
B) Random access by row key
C) SQL query
D) MapReduce job
Answer: B

330. What is the purpose of the `Zookeeper` in the HBase architecture?
A) To store the actual data.
B) To maintain the cluster state, including the location of the `META` table and RegionServer health.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

331. The `META` table in HBase stores:
A) The user authentication credentials.
B) The location of all regions in the cluster.
C) The cluster configuration settings.
D) The actual data blocks.
Answer: B

332. What is the comparison between HBase and a traditional relational database in terms of schema?
A) HBase enforces a strict schema; RDBMS is schema-less.
B) HBase is schema-less (only requires a row key and column family); RDBMS requires a predefined, rigid schema.
C) Both are fully schema-less.
D) Both require a predefined, rigid schema.
Answer: B

333. Which of the following is a key characteristic of HBase's data storage?
A) Row-oriented storage
B) Column-oriented storage
C) Document-oriented storage
D) Graph-oriented storage
Answer: B

334. What is the purpose of a `Region Split` in HBase?
A) To combine two small regions into one large region.
B) To divide a large region into two smaller regions to distribute the load.
C) To move a region from one RegionServer to another.
D) To delete a region from the table.
Answer: B

335. The `Scan` operation in HBase is used for:
A) Retrieving a single row by key.
B) Iterating over a range of rows, typically for batch processing or full table scans.
C) Inserting a new row.
D) Deleting a row.
Answer: B

336. What is the role of the `BlockCache` in HBase?
A) To cache the actual data blocks for faster read access.
B) To cache the NameNode's metadata.
C) To cache the HMaster's configuration.
D) To cache the Write-Ahead Log.
Answer: A

337. Which of the following is a common use case for HBase?
A) Complex analytical reporting
B) Storing time-series data and serving real-time dashboards
C) Running large, multi-hour batch jobs
D) Performing complex SQL joins
Answer: B

338. The `Delete` operation in HBase:
A) Immediately removes the data from the disk.
B) Marks the data with a tombstone marker, which is removed during the major compaction process.
C) Requires a full table scan to execute.
D) Can only be performed by the HMaster.
Answer: B

339. What is the primary mechanism for data durability in HBase?
A) Storing data in the BlockCache.
B) Writing all changes to the Write-Ahead Log (WAL) before applying them to the MemStore.
C) Using a single RegionServer.
D) Disabling HDFS replication.
Answer: B

340. Which of the following is a key difference between HBase and Cassandra?
A) HBase is column-oriented; Cassandra is row-oriented.
B) HBase is tightly integrated with HDFS; Cassandra has its own storage system.
C) HBase is a key-value store; Cassandra is a document store.
D) HBase is only for batch processing; Cassandra is only for real-time.
Answer: B

341. The `HFile` in HBase is:
A) The in-memory storage component.
B) The on-disk file format used to store the actual cell data in HDFS.
C) The Write-Ahead Log.
D) The metadata table.
Answer: B

342. What is the purpose of `Compaction` in HBase?
A) To split large regions into smaller ones.
B) To merge smaller HFiles into larger ones and clean up deleted or expired cells.
C) To move regions between RegionServers.
D) To update the `META` table.
Answer: B

343. Which of the following is a security feature in HBase that controls which users can perform read, write, or administrative operations?
A) Authentication
B) Authorization (using Access Control Lists - ACLs)
C) Encryption
D) Auditing
Answer: B

## Apache Spark (Core) (36 Questions)

344. Which of the following is a characteristic of an RDD?
A) Mutable
B) Distributed
C) Single-node
D) Eagerly evaluated
Answer: B

345. What is the primary purpose of the `SparkContext`?
A) To store the data.
B) To connect the Spark application to the cluster manager (e.g., YARN, Mesos).
C) To execute the Map and Reduce tasks.
D) To manage the HDFS file system.
Answer: B

346. Which RDD transformation is used to return a new RDD by applying a function to each element and flattening the result?
A) `map()`
B) `filter()`
C) `flatMap()`
D) `reduce()`
Answer: C

347. The `count()` action in Spark is used to:
A) Return the number of partitions in the RDD.
B) Return the number of elements in the RDD.
C) Return the number of unique keys.
D) Return the sum of all elements.
Answer: B

348. What is the main difference between a narrow dependency and a wide dependency in Spark's RDD lineage?
A) Narrow dependency involves a shuffle; wide dependency does not.
B) Narrow dependency means one parent partition contributes to at most one child partition; wide dependency means one parent partition contributes to multiple child partitions.
C) Narrow dependency is for transformations; wide dependency is for actions.
D) Narrow dependency is fault-tolerant; wide dependency is not.
Answer: B

349. Which of the following is an example of a wide RDD transformation?
A) `map()`
B) `filter()`
C) `groupByKey()`
D) `union()`
Answer: C

350. What is the purpose of the `persist()` method on an RDD?
A) To immediately write the RDD to HDFS.
B) To mark the RDD to be stored in memory or on disk with a specified storage level.
C) To clear the RDD from memory.
D) To recompute the RDD from the source.
Answer: B

351. Which storage level in Spark ensures that the RDD is stored in memory, and if it doesn't fit, it is recomputed when needed?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `MEMORY_ONLY_SER`
Answer: A

352. What is the main advantage of using `Broadcast Variables`?
A) They allow for efficient, read-only sharing of large datasets across all worker nodes.
B) They are used for aggregating values.
C) They are used for storing the final output.
D) They are used for managing the cluster resources.
Answer: A

353. Which RDD action is used to return the elements of the RDD in a sorted order?
A) `sort()`
B) `takeOrdered()`
C) `collect()`
D) `reduce()`
Answer: B

354. When working with key-value pairs, which transformation is used to combine the values for each key using a user-defined function?
A) `mapValues()`
B) `flatMapValues()`
C) `reduceByKey()`
D) `sortByKey()`
Answer: C

355. What is the primary purpose of the `Partitioner` in a key-value RDD?
A) To determine which worker node will store the data.
B) To determine which partition a key-value pair will belong to.
C) To sort the keys within a partition.
D) To perform local aggregation.
Answer: B

356. Which of the following is a key-value RDD transformation that performs a join operation?
A) `map()`
B) `join()`
C) `filter()`
D) `union()`
Answer: B

357. What is the main benefit of using Spark's `DataFrames` over raw RDDs?
A) DataFrames are immutable.
B) DataFrames provide schema information and are optimized by the Catalyst Optimizer.
C) DataFrames are only available in Scala.
D) DataFrames are not fault-tolerant.
Answer: B

358. The `SparkSession` object is the unified entry point for which Spark functionalities?
A) Spark Core
B) Spark SQL
C) Spark Streaming
D) All of the above (in modern Spark)
Answer: D

359. Which of the following is a common technique for optimizing shuffle operations?
A) Increasing the number of partitions to a very large number.
B) Using a `Partitioner` to ensure even data distribution.
C) Disabling the `reduceByKey()` transformation.
D) Forcing all data to be written to disk.
Answer: B

360. What is the purpose of the `unpersist()` method on an RDD?
A) To write the RDD to HDFS.
B) To remove the RDD from the cache.
C) To recompute the RDD from the source.
D) To immediately execute all transformations.
Answer: B

361. Which of the following is a common use case for `Accumulators`?
A) Storing the final result of the job.
B) Debugging and tracking metrics like the number of corrupted records encountered.
C) Broadcasting a large lookup table.
D) Performing a join operation.
Answer: B

362. What is the role of the `TaskScheduler` in Spark?
A) To manage the cluster resources.
B) To launch tasks on the cluster and handle task failures.
C) To optimize the logical plan.
D) To store the RDD metadata.
Answer: B

363. Which Spark component is responsible for converting the logical plan into a physical plan?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: C

364. The `collectAsMap()` action is used on a key-value RDD to:
A) Return the result as a list of key-value pairs.
B) Return the result as a Python dictionary (or Scala Map) to the Driver.
C) Return the number of elements.
D) Return the first element.
Answer: B

365. Which of the following is a valid method for deploying a Spark application to a cluster?
A) Using the `spark-submit` script
B) Running the application directly on the NameNode
C) Running the application on the local machine only
D) Using the HDFS command line
Answer: A

366. What is the main benefit of using `coalesce()` over `repartition()` when reducing the number of partitions?
A) `coalesce()` always performs a full shuffle.
B) `coalesce()` can avoid a full shuffle if the number of partitions is being reduced.
C) `repartition()` is faster.
D) `coalesce()` is only for DataFrames.
Answer: B

367. Which RDD transformation is used to remove duplicate elements from an RDD?
A) `filter()`
B) `distinct()`
C) `union()`
D) `join()`
Answer: B

368. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution of Spark applications, including stages, tasks, and storage.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

369. Which of the following is a common data format for working with key-value pairs in Spark?
A) Tuple
B) List
C) Set
D) Dictionary
Answer: A

370. What is the main characteristic of a "stage" in Spark's execution model?
A) A stage is a set of tasks that can be executed in parallel without a shuffle.
B) A stage is a single task.
C) A stage is a single RDD transformation.
D) A stage is a single RDD action.
Answer: A

371. The `reduce()` action in Spark is used to:
A) Combine all elements of the RDD using an associative and commutative function.
B) Combine elements by key.
C) Filter elements based on a condition.
D) Sort the elements.
Answer: A

372. Which of the following is a shared variable that is read-only and is used to efficiently distribute a large dataset to all worker nodes?
A) Accumulator
B) Broadcast Variable
C) RDD
D) DataFrame
Answer: B

373. What is the main difference between `mapValues()` and `flatMapValues()` on a key-value RDD?
A) `mapValues()` changes the key; `flatMapValues()` does not.
B) `mapValues()` returns one output value for each input value; `flatMapValues()` can return zero or more output values for each input value.
C) `mapValues()` is an action; `flatMapValues()` is a transformation.
D) `mapValues()` is only for DataFrames; `flatMapValues()` is only for RDDs.
Answer: B

374. Which of the following is a valid way to create an RDD in Spark?
A) Parallelizing an existing collection in the Driver program.
B) Reading a file from HDFS or a local file system.
C) Creating a new RDD from an existing RDD via a transformation.
D) All of the above.
Answer: D

375. What is the purpose of the `Spark Driver`?
A) To run the tasks on the worker nodes.
B) To run the main function of the application and coordinate the execution.
C) To store the data.
D) To manage the cluster resources.
Answer: B

376. Which of the following is a common job optimization technique in Spark related to data partitioning?
A) Ensuring that the number of partitions is equal to the number of cores.
B) Using a custom partitioner to minimize data skew.
C) Disabling the partitioner entirely.
D) Using the default partitioner for all jobs.
Answer: B

377. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

378. What is the main benefit of using a `Dataset` over a `DataFrame` in Scala/Java?
A) Better performance.
B) Compile-time type safety.
C) Easier to use in Python.
D) Less memory usage.
Answer: B

379. Which of the following is a key characteristic of Spark's execution model that contributes to its speed?
A) It writes all intermediate results to disk.
B) It executes the entire DAG in a single pass, minimizing I/O.
C) It only supports a single programming language.
D) It relies solely on the MapReduce engine.
Answer: B

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

380. What is the primary limitation of Spark Streaming's micro-batching approach compared to true continuous processing?
A) Higher throughput
B) Lower latency
C) Non-zero end-to-end latency due to batch interval
D) Inability to handle large volumes of data
Answer: C

381. Spark MLlib provides a set of APIs for which of the following tasks?
A) Data ingestion and storage
B) Feature extraction, transformation, and model training
C) Cluster resource management
D) SQL querying
Answer: B

382. Which of the following is a key feature of Spark SQL's `DataFrame`?
A) It is a distributed collection of data organized into named columns.
B) It is a replacement for the RDD.
C) It is only available in Scala.
D) It is not fault-tolerant.
Answer: A

383. What is the purpose of the `Pipeline` concept in Spark MLlib?
A) To define the execution order of a series of SQL queries.
B) To chain together multiple `Estimators` and `Transformers` to create a complete machine learning workflow.
C) To manage the cluster resources.
D) To perform data visualization.
Answer: B

384. Which of the following is a common use case for Spark Streaming?
A) Generating static reports
B) Real-time log processing and anomaly detection
C) Complex analytical queries on historical data
D) High-frequency transactional processing
Answer: B

385. The `SparkSession` provides a unified interface for interacting with which two main components?
A) HDFS and YARN
B) Spark Core and Spark SQL
C) Kafka and HBase
D) MapReduce and Tez
Answer: B

386. What is the primary benefit of using the DataFrame-based API in Spark MLlib over the RDD-based API?
A) It is easier to use in Java.
B) It leverages the Catalyst Optimizer for performance gains.
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

387. In Kafka, what is the role of a `Partition` within a topic?
A) To store the topic's metadata.
B) To divide the topic's log into segments for parallel consumption and ordering.
C) To manage the consumer groups.
D) To store the cluster configuration.
Answer: B

388. Which of the following is a key characteristic of Kafka's message delivery guarantee?
A) Exactly-once delivery is the default.
B) At-most-once delivery is the default.
C) At-least-once delivery is the default, with exactly-once achievable through configuration.
D) No delivery guarantee is provided.
Answer: C

389. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of reliably moving data into and out of Kafka without writing custom code.
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

390. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

391. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By using a single consumer for all partitions.
B) By assigning each partition to a single consumer within the group.
C) By having all consumers process all messages.
D) By storing the messages in HDFS.
Answer: B

392. Which of the following is a common use case for integrating Spark with Kafka?
A) Running complex analytical queries on historical data.
B) Building a real-time data ingestion and processing pipeline.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: B

393. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

394. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

395. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer reads messages; Consumer writes messages.
B) Producer writes messages to a topic; Consumer reads messages from a topic.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: B

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

396. Which of the following is a key reason to choose MapReduce over Spark for a very large, single-pass batch job with limited memory resources?
A) MapReduce is faster due to in-memory processing.
B) MapReduce's disk-based approach is more stable and less prone to out-of-memory errors.
C) MapReduce is easier to program.
D) MapReduce has better support for SQL.
Answer: B

397. When connecting a database to Spark, the JDBC driver is required to:
A) Store the data in HDFS.
B) Translate Spark's data requests into SQL queries and handle the data transfer.
C) Manage the cluster resources.
D) Perform data transformation.
Answer: B

398. Which of the following is a common data integration scenario involving Spark?
A) ETL from a relational database to a data lake (HDFS/S3)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

399. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) MapReduce can only handle two stages; Spark can handle multiple stages in a single job.
B) Spark is limited to two stages; MapReduce can handle multiple stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

400. When connecting Spark to a database, the `partitionColumn`, `lowerBound`, and `upperBound` parameters are used to:
A) Define the schema of the table.
B) Enable parallel reading of the table data by splitting the query into multiple tasks.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B
# Batch 3: Q401–Q600

## Introduction to Big Data (17 Questions)

401. Which of the following is a primary challenge in dealing with the "Veracity" of Big Data?
A) Data transfer speed
B) Data cleanliness and reliability
C) Data storage cost
D) Data format variety
Answer: B

402. The concept of "Big Data beyond the hype" emphasizes the transition from simply collecting data to:
A) Generating more data
B) Extracting actionable insights and business value
C) Storing data in the cloud
D) Using only structured data
Answer: B

403. Which of the following is an example of a "semi-structured" data source in a Big Data environment?
A) A plain text file
B) A relational database table
C) A JSON or XML document
D) A video file
Answer: C

404. What is the main implication of Big Data for "evolving data repositories"?
A) Repositories must be static and unchanging.
B) Repositories must support flexible schemas and diverse data types.
C) Repositories must only use traditional SQL databases.
D) Repositories must be limited to a single server.
Answer: B

405. Which Big Data characteristic is most relevant to the use of predictive analytics models?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

406. The "Big Data skills" required for the ecosystem often include expertise in:
A) Distributed computing frameworks
B) Statistical modeling
C) Data visualization
D) All of the above
Answer: D

407. Which of the following is a key driver for the adoption of Big Data technologies related to competitive advantage?
A) The ability to personalize customer experiences at scale
B) The reduction of network latency
C) The simplification of programming languages
D) The elimination of all hardware costs
Answer: A

408. The "Data sharing and reuse practices" are critical for:
A) Reducing the total amount of data stored
B) Fostering collaboration and maximizing the utility of data assets
C) Ensuring data is only used by the original collector
D) Preventing data from being backed up
Answer: B

409. Which of the following is a common challenge related to the "Volume" of Big Data?
A) The difficulty of performing full data backups and recovery
B) The speed of data ingestion
C) The diversity of data formats
D) The lack of skilled analysts
Answer: A

410. What is the primary difference between a "data lake" and a "data warehouse" in terms of data processing?
A) Data lakes are for OLAP; data warehouses are for OLTP.
B) Data lakes are for batch processing; data warehouses are for streaming.
C) Data lakes support schema-on-read; data warehouses support schema-on-write.
D) Data lakes only store structured data; data warehouses store all data types.
Answer: C

411. Which of the following is an example of a "real-world application" of Big Data in the healthcare sector?
A) Storing patient records in a single database
B) Analyzing genomic data and electronic health records to predict disease outbreaks
C) Using a single server for all data processing
D) Manually reviewing all patient charts
Answer: B

412. The term "data provenance" is most closely related to which Big Data characteristic?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

413. Which of the following is a characteristic of "unstructured data"?
A) It is easily stored in a relational database.
B) It does not have a predefined data model (e.g., text, images, video).
C) It is always generated by machines.
D) It is only used for real-time processing.
Answer: B

414. Which ecosystem role is primarily focused on designing, building, and maintaining the data architecture and pipelines?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: B

415. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

416. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

417. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

## Hadoop Fundamentals (16 Questions)

418. Which of the following is the main purpose of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

419. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

420. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

421. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

422. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

423. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

424. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

425. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

426. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

427. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

428. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

429. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

430. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

431. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

432. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

433. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

434. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

435. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

436. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

437. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

438. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

439. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

440. In a High Availability (HA) setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

441. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

442. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

443. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

444. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

445. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

446. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

447. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

448. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

449. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

450. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

451. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

452. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

453. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

454. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

455. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

456. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

457. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

458. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

459. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

460. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

461. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

462. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

463. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

464. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

465. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

466. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

467. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

468. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

469. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

470. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

471. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

472. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

473. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

474. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

475. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

476. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

477. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

478. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

479. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

480. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

481. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

482. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

483. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

484. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

485. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

486. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

487. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

488. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

489. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

490. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

491. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

492. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

493. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

494. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

495. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

496. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

497. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

498. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

499. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

500. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

501. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

502. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

503. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

504. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

505. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

506. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

507. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

508. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

509. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

510. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

511. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

512. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

513. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

514. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

515. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

516. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

517. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

518. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

519. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

520. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

521. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

522. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

523. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

524. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

525. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

526. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

527. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

528. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

529. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

530. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

531. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

532. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

533. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

534. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

535. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

536. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

537. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

538. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

539. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

540. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

541. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

542. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

543. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

544. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

545. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

546. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

547. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

548. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

549. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

550. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

551. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

552. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

553. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

554. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

555. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

556. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

557. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

558. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

559. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

560. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

561. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

562. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

563. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

564. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

565. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

566. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

567. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

568. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

569. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

570. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

571. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

572. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

573. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

574. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

575. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

576. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

577. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

578. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

579. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

580. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

581. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

582. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

583. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

584. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

585. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

586. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

587. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

588. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

589. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

590. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

591. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

592. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

593. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

594. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

595. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

596. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

597. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

598. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

599. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

600. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B
# Batch 4: Q601–Q800

## Introduction to Big Data (17 Questions)

601. Which of the following best defines the "Veracity" of Big Data?
A) The speed at which data is generated.
B) The trustworthiness, accuracy, and quality of the data.
C) The variety of data formats.
D) The sheer size of the data.
Answer: B

602. The transition to "Big Data beyond the hype" requires organizations to focus on:
A) The cost of hardware.
B) The strategic use of data to solve complex business problems.
C) The number of employees with data science degrees.
D) The adoption of every new technology.
Answer: B

603. Which of the following is an example of a "structured" data source in a Big Data environment?
A) Email messages
B) Sensor data logs with fixed fields
C) Video files
D) Social media posts
Answer: B

604. The "evolving data repositories" trend is driven by the need to store and process:
A) Only structured data.
B) Massive amounts of diverse, multi-structured data.
C) Data only in a centralized relational database.
D) Data that is only generated internally.
Answer: B

605. Which Big Data characteristic is most relevant to the challenge of data governance and compliance?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

606. The "Big Data skills" required for the ecosystem often include expertise in:
A) Cloud computing platforms
B) Data modeling for NoSQL databases
C) Statistical analysis and machine learning
D) All of the above
Answer: D

607. Which of the following is a key driver for the adoption of Big Data technologies related to operational efficiency?
A) The ability to optimize supply chains and predict equipment failure.
B) The simplification of network infrastructure.
C) The reduction of programming complexity.
D) The elimination of all data storage.
Answer: A

608. The concept of "Data sharing and reuse" is crucial for:
A) Ensuring data is only used for its original purpose.
B) Maximizing the value extracted from data by making it accessible across different departments and applications.
C) Preventing data from being backed up.
D) Reducing the need for data security.
Answer: B

609. Which of the following is a common challenge related to the "Velocity" of Big Data?
A) Designing systems that can ingest and process data fast enough to keep up with the stream.
B) The difficulty of performing full data backups.
C) The diversity of data formats.
D) The lack of skilled analysts.
Answer: A

610. What is the primary difference between a "data lake" and a "data warehouse" in terms of data quality?
A) Data lakes enforce high data quality upon ingestion; data warehouses do not.
B) Data lakes store raw data with potentially low quality; data warehouses store cleaned, transformed data.
C) Data lakes only store clean data; data warehouses store dirty data.
D) There is no difference in data quality.
Answer: B

611. Which of the following is an example of a "real-world application" of Big Data in the retail sector?
A) Storing inventory data in a spreadsheet
B) Analyzing customer purchase history and real-time location data to offer personalized promotions
C) Manually counting stock
D) Using a single server for all data processing
Answer: B

612. The term "data lineage" is most closely related to which Big Data characteristic?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

613. Which of the following is a characteristic of "unstructured data"?
A) It is easily stored in a relational database.
B) It includes text, images, and video, which do not conform to a predefined data model.
C) It is always generated by machines.
D) It is only used for real-time processing.
Answer: B

614. Which ecosystem role is primarily focused on applying statistical and machine learning techniques to extract insights from data?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: D

615. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

616. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

617. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

## Hadoop Fundamentals (16 Questions)

618. What is the primary function of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

619. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

620. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

621. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

622. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

623. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

624. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

625. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

626. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

627. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

628. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

629. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

630. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

631. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

632. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

633. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

634. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

635. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

636. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

637. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

638. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

639. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

640. In a High Availability (HA) HDFS setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

641. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

642. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

643. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

644. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

645. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

646. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

647. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

648. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

649. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

650. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

651. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

652. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

653. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

654. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

655. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

656. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

657. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

658. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

659. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

660. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

661. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

662. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

663. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

664. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

665. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

666. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

667. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

668. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

669. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

670. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

671. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

672. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

673. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

674. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

675. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

676. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

677. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

678. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

679. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

680. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

681. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

682. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

683. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

684. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

685. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

686. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

687. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

688. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

689. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

690. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

691. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

692. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

693. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

694. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

695. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

696. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

697. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

698. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

699. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

700. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

701. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

702. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

703. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

704. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

705. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

706. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

707. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

708. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

709. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

710. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

711. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

712. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

713. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

714. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

715. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

716. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

717. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

718. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

719. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

720. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

721. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

722. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

723. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

724. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

725. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

726. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

727. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

728. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

729. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

730. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

731. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

732. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

733. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

734. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

735. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

736. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

737. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

738. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

739. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

740. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

741. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

742. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

743. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

744. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

745. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

746. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

747. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

748. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

749. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

750. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

751. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

752. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

753. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

754. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

755. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

756. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

757. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

758. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

759. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

760. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

761. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

762. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

763. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

764. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

765. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

766. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

767. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

768. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

769. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

770. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

771. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

772. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

773. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

774. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

775. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

776. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

777. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

778. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

779. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

780. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

781. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

782. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

783. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

784. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

785. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

786. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

787. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

788. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

789. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

790. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

791. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

792. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

793. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

794. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

795. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

796. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

797. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

798. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

799. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

800. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B
# Batch 5: Q801–Q1000

## Introduction to Big Data (17 Questions)

801. Which of the following is a key aspect of "Data Sharing and Reuse Practices" in a Big Data environment?
A) Restricting access to all data to a single team.
B) Implementing clear policies and technical mechanisms for data discovery and access control.
C) Storing all data in a single, unmanaged repository.
D) Deleting data immediately after its initial use.
Answer: B

802. The "Big Data beyond the hype" perspective suggests that the focus should be on:
A) The volume of data collected.
B) The business value and insights derived from the data.
C) The complexity of the underlying technology.
D) The number of different data sources.
Answer: B

803. Which of the following best characterizes the "Velocity" of Big Data?
A) The size of the dataset.
B) The rate at which data is generated and must be processed.
C) The different formats of the data.
D) The accuracy of the data.
Answer: B

804. The challenge of "Veracity" in Big Data primarily relates to:
A) The cost of storing the data.
B) The uncertainty, incompleteness, and inconsistency of the data.
C) The speed of data transfer.
D) The variety of data formats.
Answer: B

805. Which of the following is a common source of Big Data from the "Internet of Things" (IoT)?
A) Financial transaction records
B) Sensor data from industrial machinery or smart devices
C) Traditional email archives
D) Government census data
Answer: B

806. The "Big Data skills" required for the ecosystem often include expertise in:
A) Data visualization and reporting
B) Distributed file systems and databases
C) Programming languages like Python, Scala, and R
D) All of the above
Answer: D

807. Which of the following is a key driver for the adoption of Big Data technologies related to risk management?
A) The ability to detect and prevent fraud or security breaches in real-time.
B) The simplification of IT infrastructure.
C) The reduction of network latency.
D) The elimination of all data storage.
Answer: A

808. The implication of Big Data for "repository data curation" often involves:
A) A shift from manual to automated metadata generation.
B) A reduction in the need for data quality checks.
C) A move away from distributed storage.
D) A focus only on structured data.
Answer: A

809. Which of the following is a characteristic of "evolving data repositories"?
A) They are static and rarely updated.
B) They are designed to handle continuous ingestion and diverse data types.
C) They only support traditional SQL queries.
D) They are limited to a single server.
Answer: B

810. What is the primary difference between a "data warehouse" and a "data lake" in terms of data structure?
A) Data warehouses store raw data; data lakes store structured data.
B) Data warehouses store structured data; data lakes store raw, multi-structured data.
C) Data warehouses are optimized for OLTP; data lakes are optimized for OLAP.
D) Data warehouses are always on-premise; data lakes are always in the cloud.
Answer: B

811. Which of the following is an example of a "real-world application" of Big Data in the telecommunications sector?
A) Manually tracking call records
B) Analyzing call detail records (CDRs) and network traffic in real-time for network optimization and personalized services
C) Storing customer data in a single spreadsheet
D) Using a single server for all data processing
Answer: B

812. The term "data governance" encompasses which of the following?
A) Data quality
B) Data security
C) Data privacy and compliance
D) All of the above
Answer: D

813. Which of the following is a characteristic of "semi-structured data"?
A) It has a fixed schema like a relational table.
B) It has tags or markers to separate semantic elements, but the structure is not rigid (e.g., JSON, XML).
C) It is completely raw and unorganized.
D) It is only used for batch processing.
Answer: B

814. Which ecosystem role is primarily focused on translating business requirements into technical data solutions and pipelines?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: B

815. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

816. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

817. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

## Hadoop Fundamentals (16 Questions)

818. What is the primary function of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

819. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

820. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

821. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

822. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

823. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

824. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

825. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

826. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

827. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

828. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

829. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

830. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

831. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

832. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

833. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

834. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

835. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

836. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

837. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

838. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

839. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

840. In a High Availability (HA) HDFS setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

841. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

842. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

843. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

844. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

845. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

846. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

847. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

848. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

849. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

850. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

851. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

852. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

853. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

854. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

855. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

856. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

857. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

858. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

859. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

860. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

861. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

862. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

863. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

864. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

865. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

866. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

867. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

868. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

869. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

870. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

871. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

872. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

873. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

874. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

875. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

876. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

877. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

878. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

879. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

880. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

881. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

882. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

883. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

884. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

885. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

886. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

887. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

888. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

889. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

890. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

891. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

892. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

893. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

894. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

895. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

896. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

897. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

898. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

899. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

900. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

901. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

902. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

903. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

904. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

905. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

906. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

907. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

908. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

909. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

910. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

911. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

912. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

913. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

914. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

915. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

916. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

917. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

918. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

919. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

920. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

921. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

922. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

923. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

924. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

925. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

926. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

927. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

928. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

929. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

930. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

931. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

932. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

933. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

934. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

935. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

936. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

937. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

938. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

939. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

940. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

941. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

942. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

943. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

944. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

945. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

946. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

947. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

948. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

949. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

950. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

951. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

952. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

953. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

954. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

955. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

956. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

957. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

958. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

959. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

960. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

961. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

962. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

963. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

964. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

965. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

966. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

967. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

968. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

969. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

970. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

971. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

972. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

973. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

974. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

975. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

976. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

977. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

978. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

979. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

980. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

981. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

982. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

983. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

984. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

985. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

986. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

987. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

988. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

989. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

990. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

991. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

992. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

993. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

994. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

995. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

996. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

997. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

998. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

999. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

1000. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B
# Batch 6: Q1001–Q1200

## Introduction to Big Data (17 Questions)

1001. Which of the following is a key challenge in managing the "Variety" of Big Data?
A) The difficulty of storing all the data.
B) The need to integrate and process data from disparate sources and formats (structured, semi-structured, unstructured).
C) The speed at which data arrives.
D) The uncertainty of the data.
Answer: B

1002. The concept of "Data Monetization" in the Big Data context refers to:
A) Selling the data to third parties.
B) Using data to create new revenue streams, improve business processes, or reduce costs.
C) Storing data only in expensive, high-performance databases.
D) The process of data cleaning.
Answer: B

1003. Which of the following is an example of a "semi-structured" data source in a Big Data environment?
A) A relational database table.
B) A CSV file.
C) A JSON document or XML file.
D) A video file.
Answer: C

1004. The "Big Data beyond the hype" trend emphasizes the importance of:
A) Technology over business strategy.
B) Asking the right business questions before implementing technology.
C) Focusing solely on Hadoop.
D) Ignoring data governance.
Answer: B

1005. Which Big Data characteristic is most relevant to the challenge of designing systems for real-time analytics?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: B

1006. The "Big Data skills" required for the ecosystem often include expertise in:
A) Distributed computing frameworks (e.g., Spark, Flink)
B) Traditional mainframe programming
C) Manual data entry
D) Desktop publishing
Answer: A

1007. Which of the following is a key driver for the adoption of Big Data technologies related to customer experience?
A) The ability to create a single, unified view of the customer and personalize interactions.
B) The reduction of network bandwidth.
C) The simplification of data modeling.
D) The elimination of all data analysis.
Answer: A

1008. The concept of "Data Lineage" is crucial for:
A) Determining the origin, transformations, and quality of data as it moves through the pipeline.
B) Reducing the size of the data.
C) Speeding up data ingestion.
D) Encrypting the data.
Answer: A

1009. Which of the following is a common challenge related to the "Volume" of Big Data?
A) Designing cost-effective and scalable storage solutions.
B) The difficulty of integrating different data formats.
C) The speed of data arrival.
D) The uncertainty of data quality.
Answer: A

1010. What is the primary difference between a "data lake" and a "data warehouse" in terms of schema?
A) Data lakes use a schema-on-write approach; data warehouses use a schema-on-read approach.
B) Data lakes use a schema-on-read approach; data warehouses use a schema-on-write approach.
C) Both use a schema-on-write approach.
D) Neither uses a schema.
Answer: B

1011. Which of the following is an example of a "real-world application" of Big Data in the healthcare sector?
A) Storing patient records in paper files.
B) Analyzing genomic data, electronic health records (EHRs), and sensor data to predict disease outbreaks and personalize treatment.
C) Manually scheduling appointments.
D) Using a single server for all data processing.
Answer: B

1012. The term "Data Quality" is most closely related to which Big Data characteristic?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

1013. Which of the following is a characteristic of "unstructured data"?
A) It is easily stored in a relational database.
B) It includes text, images, and video, which do not conform to a predefined data model.
C) It is always generated by machines.
D) It is only used for real-time processing.
Answer: B

1014. Which ecosystem role is primarily focused on designing, building, and maintaining the infrastructure for data collection, storage, and processing?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: B

1015. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

1016. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

1017. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

## Hadoop Fundamentals (16 Questions)

1018. What is the primary function of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

1019. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

1020. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

1021. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

1022. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

1023. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

1024. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

1025. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

1026. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

1027. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

1028. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

1029. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

1030. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

1031. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

1032. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

1033. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

1034. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

1035. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

1036. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

1037. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

1038. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

1039. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

1040. In a High Availability (HA) HDFS setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

1041. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

1042. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

1043. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

1044. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

1045. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

1046. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

1047. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

1048. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

1049. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

1050. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

1051. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

1052. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

1053. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

1054. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

1055. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

1056. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

1057. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

1058. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

1059. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

1060. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

1061. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

1062. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

1063. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

1064. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

1065. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

1066. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

1067. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

1068. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

1069. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

1070. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

1071. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

1072. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

1073. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

1074. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

1075. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

1076. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

1077. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

1078. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

1079. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

1080. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

1081. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

1082. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

1083. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

1084. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

1085. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

1086. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

1087. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

1088. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

1089. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

1090. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

1091. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

1092. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

1093. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

1094. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

1095. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

1096. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

1097. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

1098. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

1099. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

1100. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

1101. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

1102. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

1103. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

1104. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

1105. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

1106. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

1107. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

1108. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

1109. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

1110. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

1111. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

1112. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

1113. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

1114. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

1115. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1116. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

1117. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

1118. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

1119. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

1120. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

1121. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

1122. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1123. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

1124. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

1125. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

1126. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

1127. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

1128. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

1129. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

1130. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

1131. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

1132. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

1133. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

1134. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

1135. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1136. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

1137. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

1138. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

1139. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

1140. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

1141. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

1142. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

1143. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

1144. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

1145. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

1146. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

1147. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

1148. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

1149. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

1150. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

1151. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

1152. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

1153. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

1154. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

1155. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

1156. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

1157. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

1158. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

1159. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

1160. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

1161. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

1162. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

1163. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

1164. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

1165. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

1166. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

1167. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

1168. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1169. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

1170. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

1171. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

1172. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

1173. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

1174. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

1175. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

1176. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

1177. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

1178. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

1179. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

1180. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

1181. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

1182. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

1183. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

1184. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

1185. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

1186. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

1187. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

1188. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

1189. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

1190. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

1191. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

1192. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

1193. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

1194. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

1195. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

1196. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

1197. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

1198. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

1199. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

1200. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B
# Batch 7: Q1201–Q1400

## Introduction to Big Data (17 Questions)

1201. Which of the following is a key challenge in managing the "Variety" of Big Data?
A) The difficulty of storing all the data.
B) The need to integrate and process data from disparate sources and formats (structured, semi-structured, unstructured).
C) The speed at which data arrives.
D) The uncertainty of the data.
Answer: B

1202. The concept of "Data Monetization" in the Big Data context refers to:
A) Selling the data to third parties.
B) Using data to create new revenue streams, improve business processes, or reduce costs.
C) Storing data only in expensive, high-performance databases.
D) The process of data cleaning.
Answer: B

1203. Which of the following is an example of a "semi-structured" data source in a Big Data environment?
A) A relational database table.
B) A CSV file.
C) A JSON document or XML file.
D) A video file.
Answer: C

1204. The "Big Data beyond the hype" trend emphasizes the importance of:
A) Technology over business strategy.
B) Asking the right business questions before implementing technology.
C) Focusing solely on Hadoop.
D) Ignoring data governance.
Answer: B

1205. Which Big Data characteristic is most relevant to the challenge of designing systems for real-time analytics?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: B

1206. The "Big Data skills" required for the ecosystem often include expertise in:
A) Distributed computing frameworks (e.g., Spark, Flink)
B) Traditional mainframe programming
C) Manual data entry
D) Desktop publishing
Answer: A

1207. Which of the following is a key driver for the adoption of Big Data technologies related to customer experience?
A) The ability to create a single, unified view of the customer and personalize interactions.
B) The reduction of network bandwidth.
C) The simplification of data modeling.
D) The elimination of all data analysis.
Answer: A

1208. The concept of "Data Lineage" is crucial for:
A) Determining the origin, transformations, and quality of data as it moves through the pipeline.
B) Reducing the size of the data.
C) Speeding up data ingestion.
D) Encrypting the data.
Answer: A

1209. Which of the following is a common challenge related to the "Volume" of Big Data?
A) Designing cost-effective and scalable storage solutions.
B) The difficulty of integrating different data formats.
C) The speed of data arrival.
D) The uncertainty of data quality.
Answer: A

1210. What is the primary difference between a "data lake" and a "data warehouse" in terms of schema?
A) Data lakes use a schema-on-write approach; data warehouses use a schema-on-read approach.
B) Data lakes use a schema-on-read approach; data warehouses use a schema-on-write approach.
C) Both use a schema-on-write approach.
D) Neither uses a schema.
Answer: B

1211. Which of the following is an example of a "real-world application" of Big Data in the healthcare sector?
A) Storing patient records in paper files.
B) Analyzing genomic data, electronic health records (EHRs), and sensor data to predict disease outbreaks and personalize treatment.
C) Manually scheduling appointments.
D) Using a single server for all data processing.
Answer: B

1212. The term "Data Quality" is most closely related to which Big Data characteristic?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

1213. Which of the following is a characteristic of "unstructured data"?
A) It is easily stored in a relational database.
B) It includes text, images, and video, which do not conform to a predefined data model.
C) It is always generated by machines.
D) It is only used for real-time processing.
Answer: B

1214. Which ecosystem role is primarily focused on designing, building, and maintaining the infrastructure for data collection, storage, and processing?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: B

1215. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

1216. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

1217. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

## Hadoop Fundamentals (16 Questions)

1218. What is the primary function of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

1219. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

1220. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

1221. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

1222. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

1223. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

1224. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

1225. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

1226. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

1227. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

1228. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

1229. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

1230. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

1231. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

1232. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

1233. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

1234. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

1235. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

1236. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

1237. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

1238. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

1239. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

1240. In a High Availability (HA) HDFS setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

1241. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

1242. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

1243. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

1244. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

1245. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

1246. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

1247. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

1248. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

1249. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

1250. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

1251. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

1252. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

1253. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

1254. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

1255. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

1256. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

1257. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

1258. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

1259. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

1260. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

1261. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

1262. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

1263. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

1264. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

1265. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

1266. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

1267. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

1268. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

1269. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

1270. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

1271. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

1272. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

1273. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

1274. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

1275. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

1276. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

1277. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

1278. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

1279. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

1280. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

1281. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

1282. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

1283. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

1284. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

1285. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

1286. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

1287. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

1288. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

1289. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

1290. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

1291. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

1292. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

1293. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

1294. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

1295. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

1296. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

1297. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

1298. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

1299. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

1300. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

1301. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

1302. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

1303. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

1304. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

1305. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

1306. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

1307. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

1308. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

1309. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

1310. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

1311. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

1312. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

1313. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

1314. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

1315. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1316. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

1317. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

1318. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

1319. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

1320. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

1321. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

1322. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1323. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

1324. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

1325. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

1326. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

1327. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

1328. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

1329. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

1330. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

1331. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

1332. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

1333. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

1334. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

1335. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1336. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

1337. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

1338. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

1339. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

1340. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

1341. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

1342. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

1343. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

1344. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

1345. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

1346. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

1347. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

1348. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

1349. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

1350. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

1351. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

1352. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

1353. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

1354. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

1355. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

1356. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

1357. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

1358. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

1359. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

1360. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

1361. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

1362. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

1363. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

1364. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

1365. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

1366. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

1367. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

1368. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1369. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

1370. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

1371. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

1372. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

1373. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

1374. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

1375. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

1376. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

1377. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

1378. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

1379. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

1380. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

1381. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

1382. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

1383. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

1384. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

1385. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

1386. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

1387. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

1388. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

1389. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

1390. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

1391. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

1392. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

1393. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

1394. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

1395. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

1396. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

1397. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

1398. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

1399. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

1400. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B
# Batch 8: Q1401–Q1600

## Introduction to Big Data (17 Questions)

1401. Which of the following is a key challenge in managing the "Variety" of Big Data?
A) The difficulty of storing all the data.
B) The need to integrate and process data from disparate sources and formats (structured, semi-structured, unstructured).
C) The speed at which data arrives.
D) The uncertainty of the data.
Answer: B

1402. The concept of "Data Monetization" in the Big Data context refers to:
A) Selling the data to third parties.
B) Using data to create new revenue streams, improve business processes, or reduce costs.
C) Storing data only in expensive, high-performance databases.
D) The process of data cleaning.
Answer: B

1403. Which of the following is an example of a "semi-structured" data source in a Big Data environment?
A) A relational database table.
B) A CSV file.
C) A JSON document or XML file.
D) A video file.
Answer: C

1404. The "Big Data beyond the hype" trend emphasizes the importance of:
A) Technology over business strategy.
B) Asking the right business questions before implementing technology.
C) Focusing solely on Hadoop.
D) Ignoring data governance.
Answer: B

1405. Which Big Data characteristic is most relevant to the challenge of designing systems for real-time analytics?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: B

1406. The "Big Data skills" required for the ecosystem often include expertise in:
A) Distributed computing frameworks (e.g., Spark, Flink)
B) Traditional mainframe programming
C) Manual data entry
D) Desktop publishing
Answer: A

1407. Which of the following is a key driver for the adoption of Big Data technologies related to customer experience?
A) The ability to create a single, unified view of the customer and personalize interactions.
B) The reduction of network bandwidth.
C) The simplification of data modeling.
D) The elimination of all data analysis.
Answer: A

1408. The concept of "Data Lineage" is crucial for:
A) Determining the origin, transformations, and quality of data as it moves through the pipeline.
B) Reducing the size of the data.
C) Speeding up data ingestion.
D) Encrypting the data.
Answer: A

1409. Which of the following is a common challenge related to the "Volume" of Big Data?
A) Designing cost-effective and scalable storage solutions.
B) The difficulty of integrating different data formats.
C) The speed of data arrival.
D) The uncertainty of data quality.
Answer: A

1410. What is the primary difference between a "data lake" and a "data warehouse" in terms of schema?
A) Data lakes use a schema-on-write approach; data warehouses use a schema-on-read approach.
B) Data lakes use a schema-on-read approach; data warehouses use a schema-on-write approach.
C) Both use a schema-on-write approach.
D) Neither uses a schema.
Answer: B

1411. Which of the following is an example of a "real-world application" of Big Data in the healthcare sector?
A) Storing patient records in paper files.
B) Analyzing genomic data, electronic health records (EHRs), and sensor data to predict disease outbreaks and personalize treatment.
C) Manually scheduling appointments.
D) Using a single server for all data processing.
Answer: B

1412. The term "Data Quality" is most closely related to which Big Data characteristic?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

1413. Which of the following is a characteristic of "unstructured data"?
A) It is easily stored in a relational database.
B) It includes text, images, and video, which do not conform to a predefined data model.
C) It is always generated by machines.
D) It is only used for real-time processing.
Answer: B

1414. Which ecosystem role is primarily focused on designing, building, and maintaining the infrastructure for data collection, storage, and processing?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: B

1415. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

1416. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

1417. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

## Hadoop Fundamentals (16 Questions)

1418. What is the primary function of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

1419. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

1420. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

1421. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

1422. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

1423. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

1424. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

1425. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

1426. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

1427. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

1428. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

1429. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

1430. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

1431. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

1432. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

1433. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

1434. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

1435. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

1436. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

1437. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

1438. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

1439. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

1440. In a High Availability (HA) HDFS setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

1441. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

1442. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

1443. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

1444. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

1445. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

1446. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

1447. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

1448. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

1449. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

1450. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

1451. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

1452. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

1453. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

1454. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

1455. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

1456. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

1457. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

1458. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

1459. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

1460. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

1461. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

1462. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

1463. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

1464. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

1465. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

1466. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

1467. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

1468. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

1469. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

1470. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

1471. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

1472. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

1473. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

1474. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

1475. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

1476. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

1477. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

1478. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

1479. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

1480. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

1481. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

1482. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

1483. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

1484. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

1485. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

1486. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

1487. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

1488. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

1489. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

1490. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

1491. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

1492. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

1493. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

1494. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

1495. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

1496. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

1497. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

1498. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

1499. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

1500. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

1501. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

1502. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

1503. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

1504. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

1505. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

1506. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

1507. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

1508. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

1509. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

1510. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

1511. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

1512. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

1513. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

1514. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

1515. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1516. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

1517. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

1518. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

1519. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

1520. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

1521. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

1522. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1523. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

1524. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

1525. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

1526. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

1527. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

1528. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

1529. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

1530. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

1531. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

1532. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

1533. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

1534. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

1535. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1536. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

1537. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

1538. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

1539. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

1540. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

1541. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

1542. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

1543. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

1544. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

1545. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

1546. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

1547. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

1548. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

1549. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

1550. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

1551. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

1552. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

1553. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

1554. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

1555. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

1556. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

1557. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

1558. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

1559. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

1560. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

1561. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

1562. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

1563. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

1564. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

1565. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

1566. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

1567. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

1568. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1569. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

1570. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

1571. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

1572. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

1573. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

1574. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

1575. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

1576. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

1577. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

1578. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

1579. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

1580. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

1581. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

1582. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

1583. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

1584. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

1585. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

1586. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

1587. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

1588. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

1589. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

1590. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

1591. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

1592. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

1593. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

1594. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

1595. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

1596. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

1597. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

1598. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

1599. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

1600. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B
# Batch 9: Q1601–Q1800

## Introduction to Big Data (17 Questions)

1601. Which of the following is a key challenge in managing the "Variety" of Big Data?
A) The difficulty of storing all the data.
B) The need to integrate and process data from disparate sources and formats (structured, semi-structured, unstructured).
C) The speed at which data arrives.
D) The uncertainty of the data.
Answer: B

1602. The concept of "Data Monetization" in the Big Data context refers to:
A) Selling the data to third parties.
B) Using data to create new revenue streams, improve business processes, or reduce costs.
C) Storing data only in expensive, high-performance databases.
D) The process of data cleaning.
Answer: B

1603. Which of the following is an example of a "semi-structured" data source in a Big Data environment?
A) A relational database table.
B) A CSV file.
C) A JSON document or XML file.
D) A video file.
Answer: C

1604. The "Big Data beyond the hype" trend emphasizes the importance of:
A) Technology over business strategy.
B) Asking the right business questions before implementing technology.
C) Focusing solely on Hadoop.
D) Ignoring data governance.
Answer: B

1605. Which Big Data characteristic is most relevant to the challenge of designing systems for real-time analytics?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: B

1606. The "Big Data skills" required for the ecosystem often include expertise in:
A) Distributed computing frameworks (e.g., Spark, Flink)
B) Traditional mainframe programming
C) Manual data entry
D) Desktop publishing
Answer: A

1607. Which of the following is a key driver for the adoption of Big Data technologies related to customer experience?
A) The ability to create a single, unified view of the customer and personalize interactions.
B) The reduction of network bandwidth.
C) The simplification of data modeling.
D) The elimination of all data analysis.
Answer: A

1608. The concept of "Data Lineage" is crucial for:
A) Determining the origin, transformations, and quality of data as it moves through the pipeline.
B) Reducing the size of the data.
C) Speeding up data ingestion.
D) Encrypting the data.
Answer: A

1609. Which of the following is a common challenge related to the "Volume" of Big Data?
A) Designing cost-effective and scalable storage solutions.
B) The difficulty of integrating different data formats.
C) The speed of data arrival.
D) The uncertainty of data quality.
Answer: A

1610. What is the primary difference between a "data lake" and a "data warehouse" in terms of schema?
A) Data lakes use a schema-on-write approach; data warehouses use a schema-on-read approach.
B) Data lakes use a schema-on-read approach; data warehouses use a schema-on-write approach.
C) Both use a schema-on-write approach.
D) Neither uses a schema.
Answer: B

1611. Which of the following is an example of a "real-world application" of Big Data in the healthcare sector?
A) Storing patient records in paper files.
B) Analyzing genomic data, electronic health records (EHRs), and sensor data to predict disease outbreaks and personalize treatment.
C) Manually scheduling appointments.
D) Using a single server for all data processing.
Answer: B

1612. The term "Data Quality" is most closely related to which Big Data characteristic?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

1613. Which of the following is a characteristic of "unstructured data"?
A) It is easily stored in a relational database.
B) It includes text, images, and video, which do not conform to a predefined data model.
C) It is always generated by machines.
D) It is only used for real-time processing.
Answer: B

1614. Which ecosystem role is primarily focused on designing, building, and maintaining the infrastructure for data collection, storage, and processing?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: B

1615. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

1616. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

1617. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

## Hadoop Fundamentals (16 Questions)

1618. What is the primary function of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

1619. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

1620. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

1621. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

1622. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

1623. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

1624. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

1625. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

1626. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

1627. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

1628. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

1629. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

1630. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

1631. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

1632. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

1633. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

1634. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

1635. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

1636. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

1637. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

1638. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

1639. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

1640. In a High Availability (HA) HDFS setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

1641. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

1642. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

1643. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

1644. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

1645. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

1646. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

1647. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

1648. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

1649. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

1650. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

1651. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

1652. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

1653. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

1654. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

1655. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

1656. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

1657. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

1658. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

1659. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

1660. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

1661. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

1662. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

1663. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

1664. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

1665. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

1666. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

1667. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

1668. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

1669. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

1670. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

1671. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

1672. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

1673. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

1674. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

1675. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

1676. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

1677. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

1678. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

1679. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

1680. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

1681. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

1682. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

1683. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

1684. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

1685. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

1686. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

1687. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

1688. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

1689. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

1690. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

1691. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

1692. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

1693. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

1694. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

1695. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

1696. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

1697. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

1698. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

1699. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

1700. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

1701. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

1702. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

1703. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

1704. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

1705. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

1706. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

1707. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

1708. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

1709. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

1710. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

1711. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

1712. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

1713. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

1714. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

1715. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1716. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

1717. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

1718. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

1719. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

1720. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

1721. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

1722. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1723. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

1724. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

1725. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

1726. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

1727. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

1728. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

1729. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

1730. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

1731. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

1732. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

1733. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

1734. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

1735. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1736. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

1737. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

1738. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

1739. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

1740. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

1741. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

1742. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

1743. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

1744. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

1745. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

1746. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

1747. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

1748. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

1749. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

1750. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

1751. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

1752. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

1753. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

1754. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

1755. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

1756. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

1757. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

1758. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

1759. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

1760. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

1761. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

1762. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

1763. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

1764. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

1765. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

1766. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

1767. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

1768. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1769. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

1770. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

1771. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

1772. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

1773. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

1774. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

1775. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

1776. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

1777. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

1778. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

1779. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

1780. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

1781. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

1782. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

1783. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

1784. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

1785. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

1786. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

1787. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

1788. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

1789. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

1790. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

1791. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

1792. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

1793. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

1794. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

1795. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

1796. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

1797. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

1798. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

1799. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

1800. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B
# Batch 10: Q1801–Q2000

## Introduction to Big Data (17 Questions)

1801. Which of the following is a key challenge in managing the "Variety" of Big Data?
A) The difficulty of storing all the data.
B) The need to integrate and process data from disparate sources and formats (structured, semi-structured, unstructured).
C) The speed at which data arrives.
D) The uncertainty of the data.
Answer: B

1802. The concept of "Data Monetization" in the Big Data context refers to:
A) Selling the data to third parties.
B) Using data to create new revenue streams, improve business processes, or reduce costs.
C) Storing data only in expensive, high-performance databases.
D) The process of data cleaning.
Answer: B

1803. Which of the following is an example of a "semi-structured" data source in a Big Data environment?
A) A relational database table.
B) A CSV file.
C) A JSON document or XML file.
D) A video file.
Answer: C

1804. The "Big Data beyond the hype" trend emphasizes the importance of:
A) Technology over business strategy.
B) Asking the right business questions before implementing technology.
C) Focusing solely on Hadoop.
D) Ignoring data governance.
Answer: B

1805. Which Big Data characteristic is most relevant to the challenge of designing systems for real-time analytics?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: B

1806. The "Big Data skills" required for the ecosystem often include expertise in:
A) Distributed computing frameworks (e.g., Spark, Flink)
B) Traditional mainframe programming
C) Manual data entry
D) Desktop publishing
Answer: A

1807. Which of the following is a key driver for the adoption of Big Data technologies related to customer experience?
A) The ability to create a single, unified view of the customer and personalize interactions.
B) The reduction of network bandwidth.
C) The simplification of data modeling.
D) The elimination of all data analysis.
Answer: A

1808. The concept of "Data Lineage" is crucial for:
A) Determining the origin, transformations, and quality of data as it moves through the pipeline.
B) Reducing the size of the data.
C) Speeding up data ingestion.
D) Encrypting the data.
Answer: A

1809. Which of the following is a common challenge related to the "Volume" of Big Data?
A) Designing cost-effective and scalable storage solutions.
B) The difficulty of integrating different data formats.
C) The speed of data arrival.
D) The uncertainty of data quality.
Answer: A

1810. What is the primary difference between a "data lake" and a "data warehouse" in terms of schema?
A) Data lakes use a schema-on-write approach; data warehouses use a schema-on-read approach.
B) Data lakes use a schema-on-read approach; data warehouses use a schema-on-write approach.
C) Both use a schema-on-write approach.
D) Neither uses a schema.
Answer: B

1811. Which of the following is an example of a "real-world application" of Big Data in the healthcare sector?
A) Storing patient records in paper files.
B) Analyzing genomic data, electronic health records (EHRs), and sensor data to predict disease outbreaks and personalize treatment.
C) Manually scheduling appointments.
D) Using a single server for all data processing.
Answer: B

1812. The term "Data Quality" is most closely related to which Big Data characteristic?
A) Volume
B) Velocity
C) Variety
D) Veracity
Answer: D

1813. Which of the following is a characteristic of "unstructured data"?
A) It is easily stored in a relational database.
B) It includes text, images, and video, which do not conform to a predefined data model.
C) It is always generated by machines.
D) It is only used for real-time processing.
Answer: B

1814. Which ecosystem role is primarily focused on designing, building, and maintaining the infrastructure for data collection, storage, and processing?
A) Data Analyst
B) Data Engineer
C) Business Analyst
D) Data Scientist
Answer: B

1815. The concept of "Big Data" is a shift from analyzing a sample of data to analyzing:
A) Only the most recent data
B) The entire dataset (N=all)
C) Only the structured data
D) Only the data that fits in memory
Answer: B

1816. Which of the following is a key implication of Big Data on "repository data curation"?
A) Curation must be a manual, human-intensive process.
B) Curation must leverage automated tools and machine learning to handle scale.
C) Curation is no longer necessary.
D) Curation should only focus on structured data.
Answer: B

1817. Which of the following is a common challenge in the "data curation" of Big Data repositories?
A) The difficulty of applying consistent metadata and quality checks to massive, diverse datasets
B) The lack of storage space
C) The speed of data transfer
D) The need for high-speed processing
Answer: A

## Hadoop Fundamentals (16 Questions)

1818. What is the primary function of the `YARN` (Yet Another Resource Negotiator) framework?
A) To provide a distributed file system.
B) To manage cluster resources and schedule applications.
C) To provide a programming model for parallel processing.
D) To provide a NoSQL database.
Answer: B

1819. What is the role of the `Container` in YARN?
A) A physical server in the cluster.
B) A logical bundle of resources (CPU, memory) on a NodeManager where an application task runs.
C) A data block in HDFS.
D) A file system directory.
Answer: B

1820. Which of the following is a key design principle of HDFS?
A) Low-latency access to data
B) Optimized for small file storage
C) High throughput for large datasets
D) Supports random read/write operations
Answer: C

1821. What is the typical replication factor for data blocks in a production HDFS cluster?
A) 1
B) 2
C) 3
D) 4
Answer: C

1822. The `NameNode` is considered the single point of failure (SPOF) in a non-HA Hadoop cluster because:
A) It stores all the data blocks.
B) It manages the file system metadata and block locations.
C) It executes all the MapReduce tasks.
D) It is the only machine with internet access.
Answer: B

1823. Which of the following is a component of the Hadoop ecosystem used for workflow scheduling and coordination?
A) Pig
B) Hive
C) Oozie
D) Sqoop
Answer: C

1824. What is the main benefit of using commodity hardware for a Hadoop cluster?
A) Higher performance than specialized hardware
B) Lower cost and horizontal scalability
C) Better fault tolerance
D) Easier administration
Answer: B

1825. The concept of "data locality" is achieved in Hadoop by:
A) Moving the data to the computation.
B) Moving the computation (MapReduce/Spark tasks) to the DataNode where the data resides.
C) Storing all data on a single, fast disk.
D) Using a high-speed network.
Answer: B

1826. Which of the following is a common Hadoop distribution?
A) Oracle Hadoop
B) Microsoft Hadoop
C) Cloudera Distribution of Hadoop (CDH)
D) IBM Hadoop
Answer: C

1827. What is the purpose of the `fs.defaultFS` property in `core-site.xml`?
A) To specify the default port for the NameNode.
B) To specify the default file system (e.g., `hdfs://namenode:port`).
C) To specify the default block size.
D) To specify the default replication factor.
Answer: B

1828. Which of the following is NOT a core component of the Hadoop 2.x technology stack?
A) HDFS
B) YARN
C) MapReduce
D) JobTracker
Answer: D

1829. What is the primary function of the `DataNode`?
A) To manage the file system namespace.
B) To store and retrieve data blocks as instructed by the NameNode.
C) To schedule application tasks.
D) To provide a SQL interface.
Answer: B

1830. The Hadoop development environment setup typically requires which programming language's runtime environment?
A) Python
B) Java
C) C++
D) R
Answer: B

1831. Which of the following is a key feature of HDFS that enables it to handle files larger than the capacity of a single disk?
A) Data compression
B) Splitting files into blocks and distributing them across multiple DataNodes
C) Using a single, large RAID array
D) Using a proprietary file format
Answer: B

1832. What is the main role of the `ApplicationMaster` in YARN?
A) To store the application's input data.
B) To manage the lifecycle of a single application, including negotiating resources and monitoring tasks.
C) To manage the global cluster resources.
D) To store the application logs.
Answer: B

1833. Which Hadoop component is a distributed coordination service used by many other components for synchronization and configuration?
A) HDFS
B) YARN
C) ZooKeeper
D) Hive
Answer: C

## HDFS Deep Dive (15 Questions)

1834. Which HDFS command is used to view the disk usage summary of files and directories in HDFS?
A) `hdfs dfs -ls`
B) `hdfs dfs -du`
C) `hdfs dfs -count`
D) `hdfs dfs -df`
Answer: B

1835. What is the main reason HDFS is optimized for large files?
A) It reduces the overhead of NameNode metadata management.
B) It allows for faster random access.
C) It supports transactional updates.
D) It is easier to compress.
Answer: A

1836. The HDFS Java API uses which class to represent a file path in HDFS?
A) `java.io.File`
B) `org.apache.hadoop.fs.Path`
C) `java.nio.file.Path`
D) `org.apache.hadoop.hdfs.File`
Answer: B

1837. When a client writes a file to HDFS, the data is streamed directly to the DataNodes, but the control flow is managed by:
A) The client itself
B) The NameNode
C) The ResourceManager
D) The DataNode receiving the first block
Answer: B

1838. What is the purpose of the `checksum` in HDFS?
A) To verify the integrity of the data blocks during read operations.
B) To ensure the data is encrypted.
C) To compress the data blocks.
D) To determine the block size.
Answer: A

1839. Which HDFS command is used to change the ownership of a file or directory?
A) `hdfs dfs -chmod`
B) `hdfs dfs -chown`
C) `hdfs dfs -chgrp`
D) `hdfs dfs -setrep`
Answer: B

1840. In a High Availability (HA) HDFS setup, how does the Standby NameNode stay synchronized with the Active NameNode?
A) By constantly polling the Active NameNode.
B) By reading the shared `edit log` from the JournalNodes.
C) By receiving a copy of all data blocks.
D) By running a MapReduce job.
Answer: B

1841. What is the primary function of the `Balancer` utility in HDFS administration?
A) To check the file system integrity.
B) To move blocks between DataNodes to ensure uniform disk space utilization.
C) To start and stop the HDFS daemons.
D) To change the replication factor.
Answer: B

1842. Which HDFS command is used to copy a file from the local file system to HDFS?
A) `hdfs dfs -get`
B) `hdfs dfs -put`
C) `hdfs dfs -cp`
D) `hdfs dfs -mv`
Answer: B

1843. What is the main difference between the `fsimage` and the `edit log`?
A) `fsimage` is a snapshot of the metadata; `edit log` is a sequence of incremental changes.
B) `fsimage` stores the data; `edit log` stores the metadata.
C) `fsimage` is only for DataNodes; `edit log` is only for the NameNode.
D) `fsimage` is only for HA; `edit log` is only for non-HA.
Answer: A

1844. Which HDFS web interface is used to monitor the status of the DataNodes and the overall cluster health?
A) ResourceManager UI
B) NameNode UI
C) JobHistory Server UI
D) NodeManager UI
Answer: B

1845. What is the process of manually marking a DataNode for removal from the cluster called?
A) Formatting
B) Decommissioning
C) Balancing
D) Replicating
Answer: B

1846. Which HDFS command is used to set the permissions of a file or directory?
A) `hdfs dfs -chown`
B) `hdfs dfs -chmod`
C) `hdfs dfs -setrep`
D) `hdfs dfs -stat`
Answer: B

1847. What is the main benefit of the HDFS `append` feature?
A) It allows data to be added to the end of an existing file, which is crucial for streaming data.
B) It allows random writes to any part of the file.
C) It reduces the replication factor.
D) It is only supported by MapReduce.
Answer: A

1848. Which HDFS command is used to view the contents of a directory?
A) `hdfs dfs -cat`
B) `hdfs dfs -ls`
C) `hdfs dfs -get`
D) `hdfs dfs -put`
Answer: B

## MapReduce (25 Questions)

1849. In the MapReduce programming model, the input to the `Map` function is typically:
A) A single key-value pair representing a record.
B) The entire input file.
C) The output of the `Reduce` function.
D) A list of all DataNodes.
Answer: A

1850. The `Shuffle and Sort` phase is implicitly triggered between which two phases?
A) InputSplit and Map
B) Map and Reduce
C) Reduce and OutputFormat
D) InputSplit and OutputFormat
Answer: B

1851. What is the main purpose of the `Partitioner` in MapReduce?
A) To ensure that all intermediate key-value pairs are sorted.
B) To determine which Reducer instance will process a particular key.
C) To perform local aggregation on the Mapper output.
D) To split the input data into chunks.
Answer: B

1852. Which of the following is a characteristic of the `Combiner`?
A) It must have the same input and output key-value types as the `Reducer`.
B) It runs on the Reducer side.
C) It is mandatory for all MapReduce jobs.
D) It is used to perform a global sort.
Answer: A

1853. The `JobConf` object is used to specify the classes for:
A) `InputFormat`
B) `Mapper`
C) `Reducer`
D) All of the above
Answer: D

1854. What is the role of the `TaskTracker` in the older Hadoop 1.x architecture?
A) To manage the cluster resources.
B) To launch and monitor Map and Reduce tasks on a node.
C) To store the file system metadata.
D) To schedule jobs across the cluster.
Answer: B

1855. Which of the following is a common MapReduce data type for representing a text string?
A) `IntWritable`
B) `LongWritable`
C) `Text`
D) `BytesWritable`
Answer: C

1856. What is the primary function of the `Reduce` function?
A) To filter the input data.
B) To aggregate, summarize, or transform the values associated with a single key.
C) To split the input data.
D) To perform a local sort.
Answer: B

1857. The `InputFormat` is responsible for creating which object that is passed to the `Mapper`?
A) `InputSplit`
B) `RecordReader`
C) `OutputFormat`
D) `Partitioner`
Answer: B

1858. Which of the following is a key advantage of the MapReduce programming model?
A) Low latency for interactive queries
B) Automatic parallelization and fault tolerance
C) In-memory processing
D) Support for random writes
Answer: B

1859. What is the purpose of the `Counters` feature in MapReduce?
A) To track the number of DataNodes.
B) To track application-level statistics and metrics.
C) To count the number of files in HDFS.
D) To count the number of unique keys.
Answer: B

1860. The `Shuffle` phase is responsible for:
A) Sorting the data by key.
B) Transferring the data from the Map output to the Reduce input.
C) Performing the final aggregation.
D) Splitting the input file.
Answer: B

1861. Which of the following is an advanced MapReduce feature that allows the user to define a custom sort order for the keys?
A) `Partitioner`
B) `Combiner`
C) `SortComparator`
D) `GroupingComparator`
Answer: C

1862. What is the main drawback of the MapReduce model for iterative algorithms?
A) The need to write intermediate results to HDFS between iterations, leading to high I/O overhead.
B) The lack of fault tolerance.
C) The inability to handle large datasets.
D) The complexity of the programming model.
Answer: A

1863. The `OutputFormat` is responsible for:
A) Defining the input splits.
B) Defining how the final key-value pairs are written to the output file.
C) Defining the Mapper and Reducer classes.
D) Defining the Partitioner.
Answer: B

1864. Which of the following is a common MapReduce data format for representing a sequence of records as binary key-value pairs?
A) `TextInputFormat`
B) `KeyValueTextInputFormat`
C) `SequenceFileInputFormat`
D) `NLineInputFormat`
Answer: C

1865. What is the main difference between `JobTracker` (Hadoop 1.x) and `ResourceManager` (Hadoop 2.x/YARN)?
A) `JobTracker` only supports MapReduce; `ResourceManager` supports multiple processing frameworks.
B) `JobTracker` is fault-tolerant; `ResourceManager` is not.
C) `JobTracker` is for small clusters; `ResourceManager` is for large clusters.
D) `JobTracker` is a client; `ResourceManager` is a server.
Answer: A

1866. The `Map` function's output is written to:
A) HDFS
B) The local disk of the DataNode running the Mapper
C) The NameNode's memory
D) The Reducer's input buffer
Answer: B

1867. Which of the following is a common MapReduce use case?
A) Real-time stock trading
B) Building a search index
C) Interactive SQL querying
D) Graph processing
Answer: B

1868. What is the purpose of the `RecordReader`?
A) To read the entire input file into memory.
B) To read a single key-value record from an `InputSplit`.
C) To write the final output.
D) To manage the HDFS file system.
Answer: B

1869. Which of the following is a valid MapReduce data type for representing a long integer?
A) `IntWritable`
B) `LongWritable`
C) `FloatWritable`
D) `Text`
Answer: B

1870. The `GroupingComparator` is used to:
A) Sort the keys globally.
B) Group the values associated with the same key before passing them to the Reducer.
C) Partition the data.
D) Perform local aggregation.
Answer: B

1871. What is the main benefit of setting the number of Reducers to a value greater than zero?
A) It allows for a global sort of the data.
B) It enables the use of the `Combiner`.
C) It increases the replication factor.
D) It reduces the need for the `Shuffle` phase.
Answer: A

1872. Which of the following is a key feature of the MapReduce programming model that ensures data integrity?
A) Speculative execution
B) Fault tolerance through re-execution of failed tasks
C) In-memory processing
D) Low latency
Answer: B

1873. The `JobClient` is responsible for:
A) Running the Map and Reduce tasks.
B) Submitting the job to the `ResourceManager` (or `JobTracker`).
C) Storing the input data.
D) Managing the cluster resources.
Answer: B

## Event/Complex Stream Processing (4 Questions)

1874. Which of the following is a key difference between batch processing and stream processing?
A) Batch processes finite data; stream processes continuous, unbounded data.
B) Batch is for low latency; stream is for high latency.
C) Batch is for structured data; stream is for unstructured data.
D) Batch is for small data; stream is for Big Data.
Answer: A

1875. Complex Event Processing (CEP) systems often use which concept to define patterns of events over time?
A) SQL queries
B) Event correlation rules
C) MapReduce jobs
D) HDFS blocks
Answer: B

1876. Which of the following is a common use case for event stream processing in the financial sector?
A) Generating end-of-day reports
B) Real-time risk assessment and algorithmic trading
C) Storing historical transaction data
D) Running a nightly ETL job
Answer: B

1877. Which of the following is a popular open-source stream processing engine?
A) Apache Hive
B) Apache Pig
C) Apache Flink
D) Apache Sqoop
Answer: C

## Hadoop Environment & Administration (15 Questions)

1878. Which of the following is a key security concept in Hadoop that ensures only authenticated users can access the cluster?
A) Authorization
B) Authentication (e.g., Kerberos)
C) Auditing
D) Encryption
Answer: B

1879. The `yarn.nodemanager.local-dirs` property in `yarn-site.xml` specifies:
A) The directories where the NodeManager stores temporary data and logs.
B) The directories where the HDFS data blocks are stored.
C) The location of the NameNode metadata.
D) The location of the YARN ResourceManager.
Answer: A

1880. What is the primary purpose of a Hadoop benchmark like `TestDFSIO`?
A) To test the MapReduce performance.
B) To test the HDFS I/O performance (read and write throughput).
C) To test the YARN resource allocation.
D) To test the NameNode's memory usage.
Answer: B

1881. Which of the following is a common task when administering a Hadoop cluster to ensure data integrity?
A) Running `hdfs fsck` periodically
B) Disabling the DataNodes
C) Increasing the block size to 1GB
D) Reducing the replication factor to 1
Answer: A

1882. What is the main challenge in "cluster specification and sizing" related to memory?
A) Determining the exact amount of memory for the NameNode.
B) Balancing the memory allocation between the operating system, HDFS, and the YARN containers.
C) Ensuring all nodes have the same amount of memory.
D) Minimizing the total memory usage.
Answer: B

1883. Which Hadoop configuration file is used to specify the location of the NameNode's metadata?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: B

1884. What is the purpose of the `hadoop-env.sh` file?
A) To define the environment variables for Hadoop daemons.
B) To store the HDFS metadata.
C) To store the cluster's security credentials.
D) To list the DataNodes.
Answer: A

1885. Which of the following is a key security concept in Hadoop that ensures data is unreadable to unauthorized users?
A) Authentication
B) Authorization
C) Auditing
D) Encryption (at rest and in transit)
Answer: D

1886. When administering a Hadoop cluster, what is the process of moving data blocks between DataNodes to balance the load?
A) Decommissioning
B) Balancing
C) Formatting
D) Replicating
Answer: B

1887. Which YARN component is responsible for managing the global resource allocation policy?
A) NodeManager
B) ResourceManager
C) ApplicationMaster
D) JobHistory Server
Answer: B

1888. What is the primary benefit of using a High Availability (HA) setup for the ResourceManager?
A) It speeds up the MapReduce execution.
B) It eliminates the single point of failure associated with the ResourceManager.
C) It increases the cluster's storage capacity.
D) It reduces the need for data replication.
Answer: B

1889. Which Hadoop configuration file is used to specify the number of concurrent Map and Reduce tasks that can run on a node (in older MapReduce)?
A) `core-site.xml`
B) `hdfs-site.xml`
C) `mapred-site.xml`
D) `yarn-site.xml`
Answer: C

1890. What is the purpose of the `slaves` file (or `workers` file) in a Hadoop setup?
A) To list the DataNodes and NodeManagers that the master nodes should communicate with.
B) To store the cluster's security credentials.
C) To store the HDFS metadata.
D) To define the environment variables.
Answer: A

1891. Which of the following is a common method for monitoring the resource utilization of a Hadoop cluster?
A) Checking the `hdfs dfs -ls` output
B) Using the YARN ResourceManager UI
C) Running the `TestDFSIO` benchmark
D) Checking the `fsimage` file
Answer: B

1892. What is the main security challenge when integrating Hadoop with external systems?
A) Ensuring consistent authentication and authorization across all integrated systems.
B) The lack of storage space.
C) The speed of data transfer.
D) The complexity of the programming model.
Answer: A

## Apache Airflow / ETL / Informatica (15 Questions)

1893. In the context of ETL, what does the "Transform" phase involve?
A) Reading data from source systems.
B) Applying business rules, cleansing, and aggregating data.
C) Writing data to the target system.
D) Analyzing the data for insights.
Answer: B

1894. Which of the following is a key characteristic of a "data warehouse"?
A) Optimized for transactional processing (OLTP).
B) Optimized for analytical processing (OLAP).
C) Stores data in its raw, unprocessed format.
D) Uses a schema-on-read approach.
Answer: B

1895. What is the primary purpose of a "DAG" (Directed Acyclic Graph) in Apache Airflow?
A) To store the data.
B) To define the workflow, including tasks and their dependencies.
C) To execute the tasks in parallel without any dependencies.
D) To manage the cluster resources.
Answer: B

1896. Which of the following is a common use case for Apache Airflow?
A) Real-time stream processing
B) Orchestrating complex, scheduled data pipelines
C) Storing large volumes of data
D) Performing high-frequency transactional updates
Answer: B

1897. The process of "data normalization" is typically performed during which phase of ETL?
A) Extract
B) Transform
C) Load
D) Analysis
Answer: B

1898. What is the main benefit of using an ELT approach in a cloud-based data warehouse (e.g., Snowflake, Redshift)?
A) It reduces the need for a data lake.
B) It leverages the massive scalability and compute power of the cloud data warehouse for transformation.
C) It eliminates the need for data governance.
D) It is only suitable for small datasets.
Answer: B

1899. Which of the following is a key component of a data warehouse architecture?
A) NameNode
B) Staging Area
C) RegionServer
D) Broker
Answer: B

1900. Which of the following is a commercial ETL tool that competes with Informatica?
A) Apache Spark
B) Talend
C) Apache Airflow
D) Apache Hive
Answer: B

1901. Designing ETL data pipelines often involves creating a "star schema" or "snowflake schema" for:
A) The source system
B) The staging area
C) The data warehouse
D) The data lake
Answer: C

1902. What is the primary function of the `Scheduler` component in Apache Airflow?
A) To execute the tasks.
B) To monitor the DAGs and trigger their runs based on defined schedules and dependencies.
C) To store the DAG definitions.
D) To manage the connections to external systems.
Answer: B

1903. Which of the following is a characteristic of a "data lake"?
A) Data is typically stored in its raw, original format.
B) Data is always structured and normalized.
C) It is optimized for low-latency transactional updates.
D) It is only suitable for small datasets.
Answer: A

1904. In the context of data integration, what does the term "metadata" refer to?
A) The actual data values.
B) Data about the data (e.g., schema, lineage, quality metrics).
C) The physical storage location.
D) The user access logs.
Answer: B

1905. Which of the following is a typical target system for an ETL pipeline?
A) Operational databases (OLTP)
B) Data Warehouse
C) Flat files
D) SaaS application APIs
Answer: B

1906. When designing an ETL pipeline, the "Load" step involves:
A) Reading data from the source.
B) Writing the transformed data to the target system.
C) Applying business rules.
D) Cleansing the data.
Answer: B

1907. Which of the following is a key advantage of using a dedicated workflow orchestration tool like Airflow?
A) It eliminates the need for data storage.
B) It provides a visual interface for monitoring and managing complex workflows.
C) It performs all data transformation automatically.
D) It is only suitable for simple, linear workflows.
Answer: B

## Apache Hive (21 Questions)

1908. Which of the following is a key characteristic of Hive's architecture?
A) It is a relational database.
B) It is a data warehousing infrastructure built on top of Hadoop.
C) It is a NoSQL database.
D) It is a stream processing engine.
Answer: B

1909. What is the primary purpose of the `Hive Metastore`?
A) To store the actual data.
B) To store the metadata for Hive tables, partitions, and columns.
C) To execute the HiveQL queries.
D) To manage the cluster resources.
Answer: B

1910. When a HiveQL query is executed, the `Compiler` component is responsible for:
A) Storing the data in HDFS.
B) Parsing the query and generating a logical plan.
C) Managing the cluster resources.
D) Storing the table metadata.
Answer: B

1911. Which of the following is a key difference between a Hive `Managed Table` and an `External Table`?
A) Managed tables are always partitioned; External tables are not.
B) Dropping a Managed table deletes both the metadata and the data; dropping an External table only deletes the metadata.
C) Managed tables are only for structured data; External tables are for unstructured data.
D) Managed tables are only for MapReduce; External tables are for Spark.
Answer: B

1912. Which HiveQL clause is used to sort the data within each reducer?
A) `ORDER BY`
B) `SORT BY`
C) `CLUSTER BY`
D) `DISTRIBUTE BY`
Answer: B

1913. What is the main benefit of using `bucketing` in Hive?
A) It ensures a global sort order.
B) It improves the performance of joins and sampling operations.
C) It reduces the number of partitions.
D) It simplifies the query syntax.
Answer: B

1914. Which of the following is a key feature of Hive evolution that allows for faster query execution?
A) The ability to use execution engines like Tez and Spark instead of only MapReduce.
B) The removal of the Metastore.
C) The elimination of the need for HDFS.
D) The transition to a proprietary query language.
Answer: A

1915. What is the purpose of the `SERDE` (Serializer/Deserializer) in Hive?
A) To define the execution engine.
B) To translate the data between the disk format (HDFS) and the in-memory format (Hive).
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1916. Which HiveQL command is used to add a new column to an existing table?
A) `CREATE TABLE`
B) `ALTER TABLE ADD COLUMNS`
C) `INSERT INTO TABLE`
D) `UPDATE TABLE`
Answer: B

1917. What is the main drawback of using `ORDER BY` in Hive?
A) It performs a local sort only.
B) It requires a single reducer, which can be a performance bottleneck for large datasets.
C) It is only supported by the MapReduce engine.
D) It cannot be used with partitioned tables.
Answer: B

1918. Which of the following is a valid use case for a Hive `UDF` (User Defined Function)?
A) To perform a complex join operation.
B) To implement a custom function for row-level data transformation.
C) To aggregate data across multiple rows.
D) To manage the cluster resources.
Answer: B

1919. What is the primary function of the `HiveServer2`?
A) To store the Metastore database.
B) To provide a multi-user, concurrent access service for Hive.
C) To execute the MapReduce jobs.
D) To manage the HDFS file system.
Answer: B

1920. Which HiveQL clause is used to filter rows based on a condition before the `GROUP BY` clause?
A) `HAVING`
B) `WHERE`
C) `FILTER`
D) `ORDER BY`
Answer: B

1921. What is the main benefit of using `partitioning` in Hive?
A) It ensures a global sort order.
B) It allows queries to scan only a subset of the data, improving performance.
C) It reduces the replication factor.
D) It simplifies the query syntax.
Answer: B

1922. Which of the following is a common file format for storing data in Hive?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1923. What is the purpose of the `EXPLAIN` command in HiveQL?
A) To execute the query and return the result.
B) To show the execution plan of the query.
C) To describe the schema of a table.
D) To show the list of tables.
Answer: B

1924. Which type of join in Hive is most efficient when the smaller table is broadcast to all mappers?
A) Reduce-side join
B) Map-side join
C) Full outer join
D) Cross join
Answer: B

1925. What is the main difference between `SORT BY` and `DISTRIBUTE BY`?
A) `SORT BY` sorts the data within each reducer; `DISTRIBUTE BY` controls which reducer receives which data.
B) `SORT BY` is a global sort; `DISTRIBUTE BY` is a local sort.
C) `SORT BY` is mandatory; `DISTRIBUTE BY` is optional.
D) `SORT BY` is only for managed tables; `DISTRIBUTE BY` is only for external tables.
Answer: A

1926. Which Hive feature allows users to define a custom function that returns a table (multiple rows and columns)?
A) UDF (User Defined Function)
B) UDTF (User Defined Table-Generating Function)
C) UDAF (User Defined Aggregate Function)
D) UDSF (User Defined Scalar Function)
Answer: B

1927. What is the main drawback of using Hive for data processing?
A) It is not fault-tolerant.
B) It is not suitable for low-latency, interactive queries.
C) It cannot handle large volumes of data.
D) It does not support a SQL-like interface.
Answer: B

1928. Which HiveQL command is used to remove a partition from a table?
A) `DROP TABLE`
B) `ALTER TABLE DROP PARTITION`
C) `DELETE FROM TABLE`
D) `REMOVE PARTITION`
Answer: B

## HBase (15 Questions)

1929. HBase is a NoSQL database that provides:
A) Sequential access to data
B) Random, real-time read/write access
C) Complex SQL joins
D) Full ACID compliance
Answer: B

1930. What is the primary role of the `RegionServer` in HBase architecture?
A) To manage the cluster state.
B) To host and manage regions, handling read and write requests from clients.
C) To store the metadata.
D) To execute MapReduce jobs.
Answer: B

1931. Data in HBase is physically stored in which file format on HDFS?
A) CSV
B) HFile
C) Parquet
D) ORC
Answer: B

1932. What is the purpose of the `MemStore` in HBase?
A) To store the table metadata.
B) To cache the actual data blocks.
C) To buffer the incoming writes in memory before flushing to HDFS.
D) To manage the cluster security.
Answer: C

1933. Which of the following is a key characteristic of HBase's data model?
A) Fixed schema
B) Column-oriented storage
C) Row-oriented storage
D) Optimized for full table scans
Answer: B

1934. The `Get` operation in HBase is optimized for:
A) Retrieving a range of rows.
B) Retrieving a single row by its row key.
C) Inserting a new row.
D) Deleting a row.
Answer: B

1935. What is the main purpose of the `WAL` (Write-Ahead Log) in HBase?
A) To ensure data is written to HDFS immediately.
B) To record all changes before they are applied to the MemStore, ensuring durability.
C) To manage the cluster security.
D) To store the table metadata.
Answer: B

1936. Which of the following is a key difference between HBase and a relational database in terms of updates?
A) HBase supports in-place updates.
B) HBase uses versioning and writes a new cell for every update.
C) HBase does not support updates.
D) HBase uses SQL for updates.
Answer: B

1937. The `Scan` operation in HBase is typically used for:
A) Low-latency, single-row lookups.
B) Batch processing and analytical queries over a range of rows.
C) Inserting new data.
D) Deleting a single row.
Answer: B

1938. What is the role of the `HMaster` in HBase?
A) To handle all client read/write requests.
B) To manage the cluster, including region assignment and load balancing.
C) To store the actual data.
D) To execute MapReduce jobs.
Answer: B

1939. Which of the following is a security feature in HBase that controls access to data at the cell level?
A) Authentication
B) Cell-level security
C) Auditing
D) Encryption
Answer: B

1940. What is the process of merging smaller HFiles into a larger one to improve read performance called?
A) Region Split
B) Compaction
C) Balancing
D) Replication
Answer: B

1941. Which of the following is a common use case for HBase?
A) Storing and querying time-series data
B) Complex multi-table joins
C) Full-text search indexing
D) Generating static reports
Answer: A

1942. The `Delete` operation in HBase:
A) Immediately removes the data from the HFile.
B) Writes a tombstone marker to the MemStore and WAL.
C) Requires a full table scan.
D) Can only be performed by the HMaster.
Answer: B

1943. What is the comparison between HBase and HDFS?
A) HBase is a file system; HDFS is a database.
B) HBase is a database that runs on top of HDFS.
C) Both are file systems.
D) Both are databases.
Answer: B

## Apache Spark (Core) (36 Questions)

1944. What is the primary purpose of the `SparkContext` in a Spark application?
A) To store the data.
B) To establish a connection to the Spark cluster and create RDDs.
C) To execute the tasks on the worker nodes.
D) To manage the HDFS file system.
Answer: B

1945. Which of the following is a key characteristic of RDDs?
A) Mutable
B) Fault-tolerant
C) Eagerly evaluated
D) Not distributed
Answer: B

1946. What is the main difference between a Spark `transformation` and an `action`?
A) Transformation is executed immediately; action is executed lazily.
B) Transformation creates a new RDD; action triggers the execution of the DAG and returns a result.
C) Transformation is only for RDDs; action is only for DataFrames.
D) Transformation is only for batch; action is only for streaming.
Answer: B

1947. Which RDD transformation is used to combine elements from two RDDs with the same number of partitions and elements per partition?
A) `union()`
B) `join()`
C) `zip()`
D) `cartesian()`
Answer: C

1948. The `take(n)` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first `n` elements of the RDD to the Driver.
C) Return a random sample of `n` elements.
D) Return the last `n` elements.
Answer: B

1949. What is the purpose of `RDD persistence`?
A) To store the RDD permanently on HDFS.
B) To save the RDD in memory or on disk for faster reuse in subsequent operations.
C) To ensure the RDD is recomputed from the source.
D) To clear the RDD from memory.
Answer: B

1950. Which storage level is recommended for RDDs that are too large to fit entirely in memory?
A) `MEMORY_ONLY`
B) `MEMORY_AND_DISK`
C) `DISK_ONLY`
D) `OFF_HEAP`
Answer: B

1951. What is the main advantage of using `Accumulators`?
A) They allow for efficient, read-only sharing of large datasets.
B) They provide a mechanism for safely aggregating values across the cluster.
C) They are used for performing a join operation.
D) They are used for sorting the data.
Answer: B

1952. Which RDD transformation is used to return a new RDD containing only the elements that satisfy a predicate?
A) `map()`
B) `filter()`
C) `reduce()`
D) `flatMap()`
Answer: B

1953. When working with key-value pairs, which transformation is used to sort the RDD by key?
A) `mapValues()`
B) `reduceByKey()`
C) `sortByKey()`
D) `groupByKey()`
Answer: C

1954. What is the main drawback of using `groupByKey()` in Spark?
A) It is not fault-tolerant.
B) It involves a full shuffle and can lead to out-of-memory errors if the values for a single key are too large.
C) It is only available in Python.
D) It is slower than `map()`.
Answer: B

1955. Which of the following is a key-value RDD transformation that returns a new RDD containing only the keys from the original RDD?
A) `keys()`
B) `values()`
C) `mapValues()`
D) `reduceByKey()`
Answer: A

1956. What is the primary function of the `Catalyst Optimizer` in Spark?
A) To manage the cluster resources.
B) To optimize the execution plan of Spark SQL and DataFrame operations.
C) To store the RDD data in memory.
D) To handle task failures.
Answer: B

1957. Which of the following is a common technique for optimizing Spark jobs?
A) Minimizing the number of transformations.
B) Using `persist()` or `cache()` on RDDs that are reused.
C) Increasing the number of shuffle operations.
D) Running all tasks on a single core.
Answer: B

1958. The `repartition()` transformation is used to:
A) Change the number of partitions, always involving a shuffle.
B) Change the number of partitions without a shuffle.
C) Remove duplicate records.
D) Sort the data by key.
Answer: A

1959. What is the purpose of the `countByKey()` action on a key-value RDD?
A) To return the number of elements in the RDD.
B) To return a map of (key, count) pairs to the Driver.
C) To return the number of unique keys.
D) To return the total number of values.
Answer: B

1960. Which of the following is a shared variable that is used for aggregating values and can only be updated by the Executors?
A) Broadcast Variable
B) Accumulator
C) RDD
D) DataFrame
Answer: B

1961. What is the role of the `DAGScheduler` in Spark?
A) To manage the cluster resources.
B) To compute the DAG of RDDs and determine the stages of execution.
C) To launch tasks on the worker nodes.
D) To store the RDD metadata.
Answer: B

1962. Which Spark component is responsible for launching tasks on the worker nodes?
A) DAGScheduler
B) TaskScheduler
C) Catalyst Optimizer
D) SparkContext
Answer: B

1963. The `first()` action in Spark is used to:
A) Return all elements of the RDD.
B) Return the first element of the RDD.
C) Return the last element of the RDD.
D) Return the number of elements.
Answer: B

1964. Which of the following is a key characteristic of a `DataFrame`?
A) It is an immutable, distributed collection of data.
B) It is a distributed collection of data organized into named columns.
C) It is only available in Python.
D) It is not fault-tolerant.
Answer: B

1965. What is the main difference between a narrow dependency and a wide dependency in terms of fault recovery?
A) Narrow dependency is easier to recover from because only the lost parent partition needs to be recomputed.
B) Wide dependency is easier to recover from because the entire RDD needs to be recomputed.
C) Both are equally easy to recover from.
D) Neither is fault-tolerant.
Answer: A

1966. Which RDD transformation is used to return a new RDD containing the elements from the original RDD that are not present in another RDD?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: C

1967. What is the purpose of the `Spark Driver`?
A) To execute the tasks on the worker nodes.
B) To run the main application logic and coordinate the execution.
C) To store the data.
D) To manage the HDFS file system.
Answer: B

1968. Which of the following is a common data format for working with structured data in Spark?
A) CSV
B) JSON
C) Parquet
D) All of the above
Answer: D

1969. The `count()` action is an example of a:
A) Transformation
B) Action
C) Lazy operation
D) Narrow dependency
Answer: B

1970. Which RDD transformation is used to group the values for each key into a single list?
A) `reduceByKey()`
B) `groupByKey()`
C) `mapValues()`
D) `sortByKey()`
Answer: B

1971. What is the main benefit of using `coalesce()` over `repartition()` when increasing the number of partitions?
A) `coalesce()` is faster.
B) `coalesce()` is only for DataFrames.
C) `coalesce()` can avoid a full shuffle.
D) `repartition()` is more efficient.
Answer: D

1972. Which RDD action is used to return a random sample of the RDD?
A) `take()`
B) `sample()`
C) `collect()`
D) `reduce()`
Answer: B

1973. What is the purpose of the `Spark UI`?
A) To submit Spark jobs.
B) To monitor the execution and performance of Spark applications.
C) To write Spark code.
D) To manage the cluster resources.
Answer: B

1974. Which of the following is a key characteristic of Spark's execution model?
A) It relies on the operating system for fault tolerance.
B) It uses a Directed Acyclic Graph (DAG) to represent the flow of computation.
C) It is limited to two stages (Map and Reduce).
D) It only supports batch processing.
Answer: B

1975. The `saveAsTextFile()` action is used to:
A) Read data from HDFS.
B) Write the RDD to a text file in HDFS or a local file system.
C) Store the RDD in memory.
D) Clear the RDD from memory.
Answer: B

1976. Which RDD transformation is used to return a new RDD containing the elements that are present in both RDDs?
A) `union()`
B) `intersection()`
C) `subtract()`
D) `cartesian()`
Answer: B

1977. What is the main difference between `map()` and `mapValues()` on a key-value RDD?
A) `map()` operates on the entire key-value pair; `mapValues()` operates only on the value.
B) `map()` is an action; `mapValues()` is a transformation.
C) `map()` is only for RDDs; `mapValues()` is only for DataFrames.
D) `map()` is eagerly evaluated; `mapValues()` is lazily evaluated.
Answer: A

1978. Which of the following is a common technique for reducing the amount of data shuffled in a Spark job?
A) Using `reduceByKey()` instead of `groupByKey()`
B) Increasing the number of partitions
C) Disabling the `Combiner`
D) Using a single core
Answer: A

1979. The `lookup()` action on a key-value RDD is used to:
A) Return all values associated with a specified key.
B) Return the first value in the RDD.
C) Return the number of elements.
D) Return the entire RDD.
Answer: A

## Spark Advanced (Streaming, MLlib, SQL) (7 Questions)

1980. Spark Streaming's `DStream` (Discretized Stream) is internally represented as a sequence of:
A) DataFrames
B) RDDs
C) Kafka topics
D) HDFS blocks
Answer: B

1981. Which of the following is a key feature of Spark MLlib's `Transformer`?
A) It can learn from data and produce a model.
B) It can transform one DataFrame into another (e.g., feature scaling).
C) It can manage the cluster resources.
D) It can perform SQL queries.
Answer: B

1982. What is the primary purpose of `Spark SQL`?
A) To provide a SQL interface for querying structured and semi-structured data.
B) To replace traditional relational databases.
C) To manage the cluster resources.
D) To handle real-time event processing.
Answer: A

1983. Which Spark abstraction is the entry point for all Spark functionality in modern Spark applications?
A) SparkContext
B) SparkSession
C) StreamingContext
D) HiveContext
Answer: B

1984. Spark MLlib's `Estimator` is responsible for:
A) Transforming data.
B) Learning from data and producing a `Transformer` (model).
C) Managing the cluster resources.
D) Performing SQL queries.
Answer: B

1985. Which of the following is a common operation in Spark Streaming that allows for stateful computations over a window of data?
A) `map()`
B) `reduceByKeyAndWindow()`
C) `filter()`
D) `union()`
Answer: B

1986. What is the primary benefit of using `PySpark` for Exploratory Data Analysis (EDA)?
A) It is faster than Scala.
B) It allows data scientists to leverage the scalability of Spark with the familiarity of Python libraries (e.g., Pandas, Matplotlib).
C) It is only available in Python.
D) It is less memory intensive.
Answer: B

## Spark & Kafka Integration (9 Questions)

1987. In Kafka, what is the role of a `Consumer`?
A) To publish messages to a topic.
B) To read messages from a topic.
C) To store the messages permanently.
D) To manage the Kafka cluster.
Answer: B

1988. Which of the following is a key characteristic of Kafka's architecture?
A) It is a centralized message broker.
B) It is a distributed, partitioned, and replicated commit log service.
C) It is a relational database.
D) It is a stream processing engine.
Answer: B

1989. What is the main benefit of using the `Kafka Connect API`?
A) It allows for the creation of custom data transformations.
B) It simplifies the process of integrating Kafka with external systems (e.g., databases, file systems).
C) It manages the security of the Kafka cluster.
D) It performs real-time stream processing.
Answer: B

1990. Which of the following is a key component of the Kafka architecture that stores the published messages?
A) Producer
B) Consumer
C) Broker
D) ZooKeeper
Answer: C

1991. How does a `Consumer Group` ensure that each message in a topic partition is processed only once by one consumer in the group?
A) By assigning each partition to a single consumer within the group.
B) By having all consumers process all messages.
C) By storing the messages in HDFS.
D) By using a single consumer for all partitions.
Answer: A

1992. Which of the following is a common use case for integrating Spark with Kafka?
A) Building a real-time dashboard for monitoring application metrics.
B) Running complex analytical queries on historical data.
C) Storing the cluster configuration.
D) Performing high-frequency transactional updates.
Answer: A

1993. What is the primary function of the `Zookeeper` in a Kafka cluster?
A) To store the messages.
B) To manage the brokers, topics, and partition assignments.
C) To produce messages.
D) To consume messages.
Answer: B

1994. Which of the following is a key feature of Kafka that allows consumers to read messages from a specific point in time or sequence?
A) Topic
B) Partition
C) Offset
D) Broker
Answer: C

1995. What is the main difference between a Kafka `Producer` and a Kafka `Consumer`?
A) Producer writes messages to a topic; Consumer reads messages from a topic.
B) Producer reads messages; Consumer writes messages.
C) Producer is a server; Consumer is a client.
D) Producer is only for batch; Consumer is only for streaming.
Answer: A

## Data Integration (MapReduce vs Spark, Connecting databases) (6 Questions)

1996. Which of the following is a key reason to choose Spark over MapReduce for a job that involves multiple passes over the same data?
A) MapReduce is easier to program.
B) Spark's in-memory caching significantly reduces I/O overhead.
C) MapReduce has better fault tolerance.
D) Spark is only available in Python.
Answer: B

1997. When connecting a database to Spark, the `numPartitions` parameter is used to:
A) Define the schema of the table.
B) Specify the number of Spark partitions to create for the data read from the database.
C) Filter the data before reading.
D) Specify the JDBC driver.
Answer: B

1998. Which of the following is a common data integration scenario involving Spark?
A) ETL from a data lake (HDFS/S3) to a data warehouse (e.g., Snowflake)
B) Real-time data ingestion from Kafka for processing
C) Loading data from cloud storage for machine learning
D) All of the above
Answer: D

1999. What is the main difference between the `DAG` (Directed Acyclic Graph) execution model of Spark and the sequential `Map` and `Reduce` stages of MapReduce?
A) Spark can chain multiple operations in a single job, optimizing the overall workflow; MapReduce is limited to a rigid two-step process.
B) MapReduce can handle multiple stages; Spark is limited to two stages.
C) MapReduce is in-memory; Spark is disk-based.
D) Spark is only for batch; MapReduce is only for streaming.
Answer: A

2000. When reading data from a relational database into Spark, the `dbtable` parameter specifies:
A) The name of the database to connect to.
B) The name of the table or a SQL query to read data from.
C) The JDBC driver to use.
D) The number of partitions to create.
Answer: B

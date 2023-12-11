//Best Python libraries for Machine Learning
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Best Python libraries for Machine Learning"; //title
window["msg"+k] = `
Machine Learning, as the name suggests, is the science of programming a computer by which they are able to learn from different kinds of data. A more general definition given by Arthur Samuel is – “Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed.” They are typically used to solve various types of life problems. 
<br><br>
In the older days, people used to perform Machine Learning tasks by manually coding all the algorithms and mathematical and statistical formulas. This made the processing time-consuming, tedious, and inefficient. But in the modern days, it is become very much easy and more efficient compared to the olden days with various python libraries, frameworks, and modules. Today, Python is one of the most popular programming languages for this task and it has replaced many languages in the industry, one of the reasons is its vast collection of libraries. Python libraries that are used in Machine Learning are: 
<br><br>Numpy
<br><br>Scipy
<br><br>Scikit-learn
<br><br>Theano
<br><br>TensorFlow
<br><br>Keras
<br><br>PyTorch
<br><br>Pandas
<br><br>Matplotlib
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Difference Between Machine Learning and Artificial Intelligence"; //title
window["msg"+k] = `
Artificial Intelligence (AI) and Machine Learning (ML) are two closely related but distinct fields within the broader field of computer science. AI is a discipline that focuses on creating intelligent machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and natural language processing. It involves the development of algorithms and systems that can reason, learn, and make decisions based on input data.
<br><br>
On the other hand, Machine Learning (ML) is a subfield of AI that involves teaching machines to learn from data without being explicitly programmed. ML algorithms can identify patterns and trends in data and use them to make predictions and decisions. ML is used to build predictive models, classify data, and recognize patterns, and is an essential tool for many AI applications.
<br><br>
The development of AI and ML has the potential to transform various industries and improve people’s lives in many ways. AI systems can be used to diagnose diseases, detect fraud, analyze financial data, and optimize manufacturing processes. ML algorithms can help to personalize content and services, improve customer experiences, and even help to solve some of the world’s most pressing environmental challenges.
<br><br>
Despite the many benefits of AI and ML, there are also concerns about the potential risks and challenges associated with these technologies. These include the risk of job displacement, the impact on human autonomy and decision-making, and the potential for AI and ML to be used in harmful ways. As such, it is important to approach the development and use of AI and ML responsibly and ethically and to address the potential risks and challenges associated with these technologies.
<h3>Artificial Intelligence (AI)</h3>
Artificial Intelligence comprises two words “Artificial” and “Intelligence”. Artificial refers to something which is made by humans or a non-natural thing and Intelligence means the ability to understand or think. There is a misconception that Artificial Intelligence is a system, but it is not a system. AI is implemented in the system. There can be so many definitions of AI, one definition can be “It is the study of how to train the computers so that computers can do things which at present humans can do better.” Therefore It is an intelligence that we want to add all the capabilities to a machine that human contains.
<h3>Machine Learning (ML)</h3>
Machine Learning is the learning in which a machine can learn on its own without being explicitly programmed. It is an application of AI that provides the system the ability to automatically learn and improve from experience. Here we can generate a program by integrating the input and output of that program. One of the simple definitions of Machine Learning is “Machine Learning is said to learn from experience E w.r.t some class of task T and a performance measure P if learners performance at the task in the class as measured by P improves with experiences.” 
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "General steps to follow in a Machine Learning Problem"; //title
window["msg"+k] = `
Machine learning is a method of data analysis that automates analytical model building. In simple terms, machine learning is “making a machine learn”. Machine learning is a new field that combines many traditional disciplines. It is a subset of AI.
<br><br>
Machine learning is a method of data analysis that automates analytical model building. In simple terms, machine learning is “making a machine learn”. Machine learning is a new field that combines many traditional disciplines. It is a subset of AI.
<h4>What is ML pipeline?</h4>
 • ML pipeline expresses the workflow by providing a systematic way on how to proceed with the machine learning model.<br><br>
 • ML pipelines automate the process of machine learning and following the pipeline makes the process of making ML models systematic and easy.
<br><br>
Here is the diagrammatic view of the ML pipeline:
${ShowImage('8.png')}
The Machine Learning pipeline starts with data collection and integration. After data is collected analysis and visualization of data is done. Further, the most crucial step feature selection and engineering is performed then the model is trained. After that model, evaluation is done and our model becomes ready for prediction!
<br><br>
To understand the pipeline well, consider building an ML model for a company’s customer care service. Consider a company XYZ, as an online book shop, that delivers books and kindle to its customer and this company wants an improved customer care service. It wants that if a customer calls the helpline for any kind of issue, say for replacement of books, complaint of kindle purchased or some other services. The company wants to ensure that the customer’s call gets directed to the right service person in minimum time and that the process should be smooth. To build a model for customer care services of the company, we will use the ML pipeline for the systematic development of the model.
<h3>1. Data Collection and integration</h3>
 - The first step of the ML pipeline involves the collection of data and integration of data.<br>
 - Data collected acts as an input to the model (data preparation phase)<br>
 - Inputs are called features.<br>
 - Data collected in the case of our considered example involves a lot of data. The collected data should answer the following questions- What is past customer history? What were the past orders? Is the customer a prime member of our bookstore? Does the customer own a kindle? Has the customer made any previous complaints? What was the most number of complaints?<br>
 - The more the data is, more the better our model becomes.<br>
 - Once the data is collected we need to integrate and prepare the data.<br>
 - Integration of data means placing all related data together.<br>
 - Then data preparation phase starts in which we manually and critically explore the data.<br>
 - The data preparation phase tells the developer that is the data matching the expectations. Is there enough info to make an accurate prediction? Is the data consistent?<br>
<h3>2. Exploratory Data Analysis and Visualisation</h3>
 - Once the data is prepared developer needs to visualize the data to have a better understanding of relationships within the dataset.
<br> - When we get to see data, we can notice the unseen patterns that we may not have noticed in the first phase.
<br> - It helps developers easily identify missing data and outliers.
<br> - Data visualization can be done by plotting histograms, scatter plots, etc.
<br> - After visualization is done data is analyzed so that developer can decide what ML technique he may use.
<br> - In the considered example case unsupervised learning may be used to analyze customer purchasing habits.
<h3>3. Feature Selection and Engineering</h3>
 - Feature selection means selecting what features the developer wants to use within the model.
 <br> - Features should be selected so that a minimum correlation exists between them and a maximum correlation exists between the selected features and output.
 <br> - Feature engineering is the process to manipulate the original data into new and potential data that has a lot many features within it.
 <br> - In simple words Feature engineering is converting raw data into useful data or getting the maximum out of the original data.
 <br> - Feature engineering is arguably the most crucial and time-consuming step of the ML pipeline.
 <br> - Feature selection and engineering answers questions – Are these features going to make any sense in our prediction?
 <br> - It deals with the accuracy and precision of data.
<h3>4. Model Training</h3>
 - After the first three steps are done completely we enter the model training phase.
<br> - It is the first step officially when the developer gets to train the model on basis of data.
<br> - To train the model, data is split into three parts- Training data, validation data, and test data.
<br> - Around 70%-80% of data goes into the training data set which is used in training the model.
<br> - Validation data is also known as development set or dev set and is used to avoid overfitting or underfitting situations i.e. enabling hyperparameter tuning.
<br> - Hyperparameter tuning is a technique used to combat overfitting and underfitting.
<br> - Validation data is used during model evaluation.
<br> - Around 10%-15% of data is used as validation data.
<br> - Rest 10%-15% of data goes into the test data set. Test data set is used for testing after the model preparation.
<br> - It is crucial to randomize data sets while splitting the data to get an accurate model.
<br> - Data can be randomized using Scikit learn in python.
<h3>5. Model Evaluation</h3>
 - After the model training, validation, or development data is used to evaluate the model.
<br> - To get the most accurate predictions to test data may be used for further model evaluation.
<br> - A confusion matrix is created after model evaluation to calculate accuracy and precision numerically.
<br> - After model evaluation, our model enters the final stage that is prediction.
<h3>6. Prediction</h3>
 - In the prediction phase developer deploys the model.
<br> - After model deployment, it becomes ready to make predictions.
<br> - Predictions are made on training data and test data to have a better understanding of the build model.
<br><br>
The deployment of the model isn’t a one-time exercise. As more and more data gets generated, the model is trained on new data, evaluated again, and deployed again. Model training, model evaluation, and prediction phase circulate each other.
`; //message

totalLevel = k;
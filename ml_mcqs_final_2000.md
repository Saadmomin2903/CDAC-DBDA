# Practical Machine Learning: 2000 Multiple-Choice Questions



*   Introduction to machine learning
*   Formal learning models: PAC learning
*   Bias–complexity trade-off
*   VC Dimension
*   Non-uniform learnability
*   Structural Risk Minimization
*   Occam’s Razor
*   No Free Lunch Theorem
*   Regularization and algorithmic stability
*   Model selection and validation techniques
*   Machine learning taxonomy: Supervised, Unsupervised, Semi-supervised learning
*   Practical machine learning use cases


1. In the context of PAC (Probably Approximately Correct) learning, what does the 'approximately correct' condition primarily relate to?
    A) The computational complexity of the learning algorithm.
    B) The probability that the learned hypothesis is close to the true target concept.
    C) The size of the training dataset required for convergence.
    D) The stability of the algorithm against noisy data.

    Correct Answer: B
2. A machine learning model exhibits high variance and low bias. Which of the following is the most likely scenario for this model?
    A) The model is underfitting the training data.
    B) The model is over-regularized, leading to a simple decision boundary.
    C) The model is overly complex and has memorized the training data, including noise.
    D) The model has achieved the optimal balance between bias and variance.

    Correct Answer: C
3. Which of the following techniques is a direct method to combat high variance in a complex model?
    A) Increasing the number of features.
    B) Decreasing the size of the training set.
    C) Applying L1 or L2 regularization.
    D) Using a simpler model with fewer parameters.

    Correct Answer: C
4. The VC (Vapnik–Chervonenkis) Dimension of a hypothesis class $H$ is defined as the maximum number of points that can be shattered by $H$. What does a higher VC dimension generally imply about the hypothesis class?
    A) Lower computational cost for training.
    B) Greater capacity to fit complex functions.
    C) Reduced risk of overfitting.
    D) Guaranteed convergence to the global minimum.

    Correct Answer: B
5. In the framework of Structural Risk Minimization (SRM), the goal is to find a hypothesis that minimizes a combination of two factors. What are these two factors?
    A) Training time and prediction time.
    B) Empirical risk and model complexity.
    C) Bias and variance.
    D) Data size and feature count.

    Correct Answer: B
6. A data scientist is comparing two models, $M_A$ and $M_B$, on a new dataset. $M_A$ is a simple linear model, and $M_B$ is a complex deep neural network. According to Occam's Razor principle in model selection, which statement is most accurate?
    A) $M_B$ is always preferred because deep learning models are inherently more powerful.
    B) $M_A$ is preferred only if its empirical error is significantly lower than $M_B$'s.
    C) If $M_A$ and $M_B$ have similar generalization performance, $M_A$ should be preferred.
    D) Occam's Razor is not applicable to machine learning model comparison.

    Correct Answer: B
7. The No Free Lunch (NFL) Theorem suggests that no single machine learning algorithm is universally superior to all others across all possible problems. What is the practical implication of this theorem for a machine learning practitioner?
    A) One should always use the most complex algorithm available.
    B) Algorithm selection should be guided by the specific problem domain and data characteristics.
    C) It is impossible to achieve high accuracy in any machine learning task.
    D) All machine learning algorithms will perform equally well on any given dataset.

    Correct Answer: C
8. A company is using a machine learning model to predict customer churn. They notice that the model's performance varies significantly when the training data is slightly perturbed. Which concept best describes this model behavior?
    A) Low bias.
    B) High algorithmic stability.
    C) Low algorithmic stability.
    D) High generalization error.

    Correct Answer: B
9. Which of the following is a primary purpose of using a separate validation set during the model development process?
    A) To train the model's parameters.
    B) To provide an unbiased estimate of the final model's performance.
    C) To tune the model's hyperparameters.
    D) To perform feature selection and engineering.

    Correct Answer: C
10. A scenario involves classifying images into one of ten distinct categories. The training data consists of 10,000 labeled images. This task is a classic example of which type of machine learning?
    A) Unsupervised learning.
    B) Reinforcement learning.
    C) Supervised learning.
    D) Semi-supervised learning.

    Correct Answer: C
11. In a semi-supervised learning scenario, a large amount of unlabeled data is available alongside a small amount of labeled data. Which of the following is a common technique used to leverage the unlabeled data?
    A) K-Means clustering on the labeled data.
    B) Using a Generative Adversarial Network (GAN) for data augmentation.
    C) Self-training or co-training methods.
    D) Applying a simple linear regression model.

    Correct Answer: C
12. A common practical use case for unsupervised learning in the retail industry is:
    A) Predicting the sales price of a new product.
    B) Classifying customer reviews as positive or negative.
    C) Segmenting customers into distinct groups based on purchasing behavior.
    D) Forecasting inventory needs for the next quarter.

    Correct Answer: B
13. Which of the following is the most effective way to address the bias component of the bias-variance trade-off?
    A) Increasing the amount of training data.
    B) Using a more complex model with more parameters.
    C) Applying stronger regularization (e.g., higher $\lambda$).
    D) Reducing the number of features.

    Correct Answer: B
14. The VC dimension of the hypothesis class of all linear classifiers in a 2-dimensional space ($R^2$) is:
    A) 2
    B) 3
    C) 4
    D) Infinite

    Correct Answer: D
15. Why is cross-validation a preferred model selection technique over a simple train-test split when the dataset is small?
    A) Cross-validation is computationally faster.
    B) Cross-validation provides a more robust estimate of model performance by using all data for both training and validation.
    C) Cross-validation is only used for unsupervised learning.
    D) Cross-validation automatically selects the best hyperparameters.

    Correct Answer: B
16. A machine learning model is being developed for a high-stakes medical diagnosis task. The team is concerned about the model's ability to generalize to new, unseen patient data. Which validation technique is most appropriate to get a reliable, pessimistic estimate of the model's performance?
    A) Leave-one-out cross-validation (LOOCV).
    B) Standard 80/20 train-test split.
    C) K-fold cross-validation with a large K (e.g., K=10).
    D) Nested cross-validation.

    Correct Answer: B
17. In the context of regularization, what is the primary effect of a very large regularization parameter ($\lambda$) on the model's weights?
    A) It increases the magnitude of the weights, leading to overfitting.
    B) It drives the weights towards zero, leading to a simpler model and potential underfitting.
    C) It has no effect on the weights but increases the training error.
    D) It only affects the bias term, not the feature weights.

    Correct Answer: B
18. Which statement accurately reflects the concept of non-uniform learnability?
    A) All concepts are equally easy to learn with a polynomial number of samples.
    B) The complexity of learning a concept depends on the specific distribution of the data.
    C) The learning algorithm's performance is independent of the target concept's complexity.
    D) It refers to the scenario where the training and test data distributions are different.

    Correct Answer: C
19. A practical machine learning use case where the goal is to predict a continuous numerical value, such as the price of a house, falls under which category?
    A) Classification.
    B) Regression.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
20. What is the fundamental difference between L1 (Lasso) and L2 (Ridge) regularization in terms of their effect on model weights?
    A) L1 regularization only shrinks weights, while L2 regularization can set some weights exactly to zero.
    B) L2 regularization only shrinks weights, while L1 regularization can set some weights exactly to zero.
    C) L1 is used for classification, and L2 is used for regression.
    D) L1 is more computationally expensive than L2.

    Correct Answer: A
21. When a model's performance on the training set is excellent, but its performance on the test set is significantly worse, this is a clear indication of:
    A) High bias.
    B) Underfitting.
    C) Overfitting.
    D) Optimal model complexity.

    Correct Answer: B
22. The term "algorithmic stability" in machine learning refers to:
    A) The speed at which the algorithm converges during training.
    B) The robustness of the algorithm's output to small changes in the training data.
    C) The ability of the algorithm to handle missing values.
    D) The consistency of the algorithm's performance across different hardware.

    Correct Answer: C
23. Which of the following is a key characteristic of a problem suitable for semi-supervised learning?
    A) The cost of acquiring labeled data is very high.
    B) The dataset is extremely small, with no unlabeled data.
    C) The problem requires a continuous output prediction.
    D) The data naturally forms distinct, well-separated clusters.

    Correct Answer: B
24. A data scientist is performing a hyperparameter search using a grid search approach. Which dataset should be used to evaluate the performance of each hyperparameter combination?
    A) The training set.
    B) The test set.
    C) The validation set.
    D) The entire dataset.

    Correct Answer: C
25. The concept of "Occam's Razor" in machine learning is a philosophical principle that favors:
    A) The most complex model that achieves the lowest training error.
    B) The simplest model that adequately explains the data.
    C) The model with the highest number of features.
    D) The model that takes the longest time to train.

    Correct Answer: B
26. In a scenario where a model is trained on data from one geographic region and deployed in a completely different region with different data characteristics, the model is likely to suffer from:
    A) Low variance.
    B) High algorithmic stability.
    C) A violation of the i.i.d. (independent and identically distributed) assumption.
    D) Over-regularization.

    Correct Answer: B
27. What is the main difference between supervised and unsupervised learning?
    A) Supervised learning uses deep neural networks, while unsupervised learning uses classical algorithms.
    B) Supervised learning requires labeled output data, while unsupervised learning works with unlabeled data.
    C) Supervised learning is used for classification, while unsupervised learning is used for regression.
    D) Supervised learning is only for small datasets, while unsupervised learning is for big data.

    Correct Answer: B
28. Which of the following is an example of a practical machine learning use case for **classification**?
    A) Predicting the stock price tomorrow.
    B) Grouping similar documents in a corpus.
    C) Identifying whether a credit card transaction is fraudulent or legitimate.
    D) Reducing the number of features in a dataset.

    Correct Answer: B
29. The bias of a model is best described as:
    A) The model's sensitivity to small changes in the training data.
    B) The error introduced by approximating a real-world problem with a simplified model.
    C) The error due to random noise in the training data.
    D) The difference between the training error and the test error.

    Correct Answer: C
30. In model selection, what is the primary drawback of using the test set multiple times to tune hyperparameters?
    A) It makes the training process too slow.
    B) It introduces bias into the final performance estimate, making it optimistic.
    C) It leads to underfitting.
    D) It violates the No Free Lunch Theorem.

    Correct Answer: A
31. Which formal learning model is most concerned with the sample complexity required to learn a concept within a specified error tolerance and probability?
    A) Bayesian Learning.
    B) PAC Learning.
    C) Reinforcement Learning.
    D) Deep Learning.

    Correct Answer: C
32. A learning algorithm is considered "stable" if:
    A) Its training time is constant regardless of the dataset size.
    B) The output hypothesis does not change much when the training set is slightly modified.
    C) It always converges to the global minimum of the loss function.
    D) It can handle both classification and regression tasks.

    Correct Answer: C
33. In the bias-variance trade-off, increasing the complexity of the model generally leads to:
    A) Increased bias and decreased variance.
    B) Decreased bias and increased variance.
    C) Increased bias and increased variance.
    D) Decreased bias and decreased variance.

    Correct Answer: C
34. What is the VC dimension of the hypothesis class of all axis-aligned rectangles in $R^2$?
    A) 2
    B) 3
    C) 4
    D) 5

    Correct Answer: C
35. The concept of "non-uniform learnability" addresses the fact that:
    A) Some concepts are inherently harder to learn than others, even within the same hypothesis class.
    B) The learning rate must be adjusted non-uniformly during training.
    C) The data distribution is rarely uniform in real-world applications.
    D) The error of the hypothesis is not uniformly distributed across the input space.

    Correct Answer: A
36. Which of the following is a practical example of a model selection technique?
    A) Calculating the mean squared error on the training set.
    B) Using a simple train/test split and reporting the test accuracy.
    C) Performing K-Fold Cross-Validation to compare the average performance of a Support Vector Machine and a Random Forest.
    D) Applying Principal Component Analysis (PCA) to reduce the feature space.

    Correct Answer: B
37. The "No Free Lunch" theorem implies that the success of a machine learning algorithm is fundamentally dependent on:
    A) The size of the dataset.
    B) The choice of the loss function.
    C) The alignment between the algorithm's inductive bias and the problem's structure.
    D) The computational power available.

    Correct Answer: B
38. A company wants to use machine learning to identify groups of similar documents in their internal knowledge base without any prior labels. This is a task for:
    A) Supervised learning (Classification).
    B) Supervised learning (Regression).
    C) Unsupervised learning (Clustering).
    D) Semi-supervised learning.

    Correct Answer: B
39. What is the primary role of the hold-out test set in the machine learning workflow?
    A) To train the model's parameters.
    B) To tune the model's hyperparameters.
    C) To provide a final, unbiased evaluation of the model's generalization ability.
    D) To perform initial exploratory data analysis (EDA).

    Correct Answer: B
40. L2 regularization (Ridge Regression) is often preferred over L1 regularization (Lasso) when:
    A) Feature selection is the primary goal.
    B) The model needs to be as sparse as possible.
    C) All features are believed to be relevant and should contribute to the model.
    D) The dataset contains a large number of irrelevant features.

    Correct Answer: D
41. A model that has high bias is typically characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
42. Algorithmic stability is closely related to which other key concept in machine learning theory?
    A) The VC Dimension.
    B) Generalization error.
    C) The No Free Lunch Theorem.
    D) The curse of dimensionality.

    Correct Answer: A
43. Which scenario best illustrates the need for semi-supervised learning?
    A) Training a model with 1 million fully labeled images.
    B) Training a model with 10 labeled images and 10 million unlabeled images.
    C) Training a model with 10 labeled images and no unlabeled images.
    D) Training a model to predict a continuous value.

    Correct Answer: B
44. When performing model selection, why is it important that the test set is never used for hyperparameter tuning?
    A) It makes the model too simple.
    B) It leads to data leakage, resulting in an overly optimistic estimate of generalization error.
    C) It increases the model's bias.
    D) It is computationally inefficient.

    Correct Answer: B
45. The principle of Occam's Razor suggests that, given two models with the same performance, the simpler model is preferred because:
    A) It is faster to train.
    B) It is less likely to overfit the training data.
    C) It is easier to deploy in production.
    D) It requires less memory.

    Correct Answer: B
46. A practical use case for machine learning where the goal is to predict the probability of a mechanical failure within the next 30 days is an example of:
    A) Unsupervised learning.
    B) Time-series forecasting (Classification or Regression, depending on output).
    C) Reinforcement learning.
    D) Dimensionality reduction.

    Correct Answer: A
47. In PAC learning, the "Probably" part of the name refers to the probability that:
    A) The training data is representative of the true distribution.
    B) The learning algorithm will terminate in polynomial time.
    C) The hypothesis learned will have an error rate greater than $\epsilon$.
    D) The hypothesis learned will have an error rate less than $\epsilon$.

    Correct Answer: B
48. What is the main advantage of using K-Fold Cross-Validation over a single train-validation split?
    A) It guarantees a lower variance in the performance estimate.
    B) It guarantees a lower bias in the performance estimate.
    C) It is computationally faster.
    D) It is only used for very large datasets.

    Correct Answer: C
49. Which regularization technique is most commonly associated with feature selection due to its ability to drive some coefficients exactly to zero?
    A) L2 Regularization (Ridge).
    B) L1 Regularization (Lasso).
    C) Dropout.
    D) Early Stopping.

    Correct Answer: B
50. A model with high variance is typically characterized by:
    A) Low training error and high test error.
    B) High training error and low test error.
    C) High training error and high test error.
    D) Low training error and low test error.

    Correct Answer: B
51. The VC dimension of a single point in $R^1$ (a single threshold classifier) is:
    A) 0
    B) 1
    C) 2
    D) Infinite

    Correct Answer: C
52. Structural Risk Minimization (SRM) is a principle that formalizes the trade-off between:
    A) Training time and prediction time.
    B) Empirical risk and the VC dimension of the hypothesis class.
    C) L1 and L2 regularization.
    D) Supervised and Unsupervised learning.

    Correct Answer: B
53. The No Free Lunch Theorem essentially states that:
    A) All algorithms are equally good.
    B) No single algorithm is best for all problems.
    C) Deep learning is the best approach for most problems.
    D) The best algorithm is the one that is simplest.

    Correct Answer: B
54. Which of the following is a key characteristic of a supervised learning problem?
    A) The input data has no associated output labels.
    B) The goal is to discover hidden patterns or structures in the data.
    C) The model learns a mapping from input features to a known output label.
    D) The model interacts with an environment to receive rewards.

    Correct Answer: B
55. A company is using machine learning to recommend products to customers based on their past purchases. This is a practical use case for:
    A) Supervised learning (Classification).
    B) Unsupervised learning (Clustering/Association).
    C) Reinforcement learning.
    D) Regression.

    Correct Answer: B
56. In the context of model selection, what is the purpose of the **nested cross-validation** technique?
    A) To select the best model architecture from a fixed set of options.
    B) To tune hyperparameters and estimate the generalization error simultaneously without bias.
    C) To train the final model on the entire dataset.
    D) To perform feature engineering.

    Correct Answer: C
57. The concept of **Occam's Razor** is a heuristic that helps prevent which common machine learning problem?
    A) High bias.
    B) Underfitting.
    C) Overfitting.
    D) Slow convergence.

    Correct Answer: B
58. Which type of machine learning is most appropriate for a task where the goal is to reduce the number of variables in a dataset while retaining most of the information?
    A) Supervised learning.
    B) Unsupervised learning (Dimensionality Reduction).
    C) Semi-supervised learning.
    D) Reinforcement learning.

    Correct Answer: B
59. What is the primary difference between **L1** and **L2** regularization in terms of the penalty term added to the loss function?
    A) L1 uses the square of the weights, L2 uses the absolute value.
    B) L1 uses the absolute value of the weights, L2 uses the square of the weights.
    C) L1 penalizes the bias term, L2 penalizes the weights.
    D) L1 is only for linear models, L2 is for all models.

    Correct Answer: C
60. A model is trained on a dataset where the input features are highly correlated. Which regularization technique is generally more effective at handling this **multi-collinearity** by distributing the weight across correlated features?
    A) L1 (Lasso).
    B) L2 (Ridge).
    C) Elastic Net (L1 + L2).
    D) Dropout.

    Correct Answer: C
61. In PAC learning, what does the 'Probably' part of the name refer to?
    A) The probability that the algorithm will find the optimal hypothesis.
    B) The probability that the training data is drawn from a uniform distribution.
    C) The probability that the error of the learned hypothesis is bounded by $\epsilon$.
    D) The probability that the learning process will complete in polynomial time.

    Correct Answer: B
62. The **Bias-Complexity Trade-off** is another name for which fundamental concept?
    A) The trade-off between training time and prediction time.
    B) The trade-off between underfitting and overfitting.
    C) The trade-off between L1 and L2 regularization.
    D) The trade-off between accuracy and interpretability.

    Correct Answer: B
63. If a hypothesis class $H$ can shatter $d$ points, but not $d+1$ points, then the VC dimension of $H$ is:
    A) $d+1$
    B) $d$
    C) $d-1$
    D) Infinite

    Correct Answer: B
64. **Structural Risk Minimization (SRM)** is a theoretical framework that aims to minimize the **true risk** by controlling:
    A) The size of the training set.
    B) The complexity of the hypothesis space.
    C) The learning rate.
    D) The number of epochs.

    Correct Answer: B
65. A data scientist uses a model trained on historical stock market data to predict future prices. The model performs poorly when tested on data from a different time period. This is an example of a failure due to:
    A) High algorithmic stability.
    B) A violation of the i.i.d. assumption.
    C) Low model complexity.
    D) Over-regularization.

    Correct Answer: B
66. Which of the following is a key characteristic of **Unsupervised Learning**?
    A) The model is given explicit feedback for every prediction.
    B) The goal is to predict a future value based on past data.
    C) The model learns the inherent structure or distribution of the data.
    D) The dataset is fully labeled with both input and output.

    Correct Answer: B
67. A practical machine learning use case where the goal is to automatically generate captions for images is an example of:
    A) Classification.
    B) Regression.
    C) Sequence-to-Sequence Supervised Learning.
    D) Unsupervised Clustering.

    Correct Answer: C
68. **Model selection** is the process of:
    A) Choosing the best set of features for a model.
    B) Choosing the best model from a set of candidate models.
    C) Choosing the best loss function for a problem.
    D) Choosing the best optimizer for a neural network.

    Correct Answer: B
69. In the context of **Occam's Razor**, a simpler model is preferred because it has a lower **generalization error bound**, which is often related to:
    A) The model's training speed.
    B) The model's VC dimension.
    C) The model's number of layers.
    D) The model's memory usage.

    Correct Answer: B
70. The **No Free Lunch Theorem** is often cited to justify the need for:
    A) Developing more complex, universal algorithms.
    B) Extensive hyperparameter tuning.
    C) Domain expertise and careful problem-specific algorithm selection.
    D) Using only linear models.

    Correct Answer: B
71. Which of the following is a technique used for **model selection**?
    A) Principal Component Analysis (PCA).
    B) K-Means Clustering.
    C) Grid Search with Cross-Validation.
    D) Stochastic Gradient Descent (SGD).

    Correct Answer: B
72. A machine learning model is used to predict whether a customer will click on an advertisement (Yes/No). This is a **binary classification** task, which falls under:
    A) Unsupervised Learning.
    B) Supervised Learning.
    C) Semi-supervised Learning.
    D) Reinforcement Learning.

    Correct Answer: D
73. The **Bias** component of the error is primarily due to:
    A) Random noise in the data.
    B) The model's inability to capture the true relationship in the data.
    C) The size of the training set.
    D) The choice of the optimizer.

    Correct Answer: C
74. **Algorithmic stability** is a desirable property because it suggests that the model's performance is:
    A) Independent of the choice of features.
    B) Robust to small variations in the training data.
    C) Always better than a random guess.
    D) Linearly related to the number of training examples.

    Correct Answer: B
75. In **Semi-supervised Learning**, the unlabeled data is primarily used to:
    A) Increase the size of the labeled dataset.
    B) Help the model learn the underlying structure of the input space.
    C) Evaluate the final performance of the model.
    D) Tune the model's hyperparameters.

    Correct Answer: A
76. What is the VC dimension of the hypothesis class of all linear classifiers in $R^d$?
    A) $d$
    B) $d+1$
    C) $2d$
    D) Infinite

    Correct Answer: B
77. The **Structural Risk Minimization (SRM)** principle suggests that as the complexity of the hypothesis class increases, the **empirical risk** tends to:
    A) Increase.
    B) Decrease.
    C) Remain constant.
    D) First increase, then decrease.

    Correct Answer: B
78. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Predicting house prices using a fully labeled dataset.
    B) Clustering customer data with no labels.
    C) Training a speech recognition model where labeling audio is expensive.
    D) Playing a game against an opponent.

    Correct Answer: C
79. The **No Free Lunch Theorem** implies that the search for a single "best" machine learning algorithm is:
    A) The ultimate goal of machine learning research.
    B) A waste of time, as performance is problem-dependent.
    C) Only relevant for unsupervised learning.
    D) Only relevant for deep learning.

    Correct Answer: A
80. Which of the following is a technique for **model validation**?
    A) Feature scaling.
    B) One-hot encoding.
    C) Stratified K-Fold Cross-Validation.
    D) Backpropagation.

    Correct Answer: B
81. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **multi-class classification** problem, which is a form of:
    A) Unsupervised Learning.
    B) Supervised Learning.
    C) Semi-supervised Learning.
    D) Reinforcement Learning.

    Correct Answer: B
82. The **Variance** component of the error is primarily due to:
    A) The model's inability to capture the true relationship in the data.
    B) The model's sensitivity to the specific training data used.
    C) The size of the test set.
    D) The choice of the loss function.

    Correct Answer: B
83. In the context of **Regularization**, what is the term for the parameter that controls the trade-off between the loss function and the penalty term?
    A) Learning rate ($\alpha$).
    B) Regularization strength ($\lambda$).
    C) Batch size.
    D) Number of epochs.

    Correct Answer: B
84. **L1 Regularization** (Lasso) is particularly useful for:
    A) Reducing the magnitude of all weights equally.
    B) Performing automatic feature selection.
    C) Handling multi-collinearity.
    D) Speeding up the training process.

    Correct Answer: B
85. A model that is **overfitting** is characterized by:
    A) High bias and low variance.
    B) Low bias and high variance.
    C) High bias and high variance.
    D) Low bias and low variance.

    Correct Answer: B
86. The concept of **Non-uniform Learnability** suggests that the complexity of a concept is not solely determined by:
    A) The number of features.
    B) The size of the training set.
    C) The VC dimension of the hypothesis class.
    D) The computational resources.

    Correct Answer: A
87. Which of the following is a practical use case for **Supervised Learning**?
    A) Market basket analysis (finding item associations).
    B) Anomaly detection in network traffic.
    C) Predicting the probability of loan default.
    D) Generating synthetic data.

    Correct Answer: B
88. **Model selection** techniques like Cross-Validation help to estimate the **generalization error** by:
    A) Training the model on the entire dataset.
    B) Simulating the process of testing the model on unseen data.
    C) Reducing the dimensionality of the feature space.
    D) Increasing the complexity of the model.

    Correct Answer: C
89. The **Occam's Razor** principle in machine learning is a preference for:
    A) Simplicity over complexity.
    B) Complexity over simplicity.
    C) High variance over high bias.
    D) Low variance over low bias.

    Correct Answer: B
90. What is the VC dimension of the hypothesis class of all circles in $R^2$?
    A) 2
    B) 3
    C) 4
    D) Infinite

    Correct Answer: B
91. In **PAC learning**, the goal is to find a hypothesis $h$ such that the true error $R(h)$ is less than or equal to:
    A) The empirical error $R_{emp}(h)$.
    B) The empirical error $R_{emp}(h)$ plus a complexity term.
    C) The empirical error $R_{emp}(h)$ minus a complexity term.
    D) The empirical error $R_{emp}(h)$ multiplied by the VC dimension.

    Correct Answer: B
92. **Algorithmic stability** is a necessary condition for:
    A) Fast training.
    B) Good generalization.
    C) High interpretability.
    D) Low memory usage.

    Correct Answer: B
93. Which of the following is a practical use case for **Unsupervised Learning**?
    A) Image classification.
    B) Speech recognition.
    C) Customer segmentation.
    D) Stock price prediction.

    Correct Answer: B
94. The **Bias-Variance Trade-off** is a central concept in machine learning because it illustrates the conflict between:
    A) Underfitting and Overfitting.
    B) L1 and L2 regularization.
    C) Training and testing.
    D) Speed and accuracy.

    Correct Answer: B
95. When a model is **underfitting**, it typically means:
    A) The model is too complex for the data.
    B) The model is too simple and cannot capture the underlying trend.
    C) The training data is too noisy.
    D) The learning rate is too high.

    Correct Answer: C
96. Which of the following is a common technique for **model selection** when dealing with time-series data?
    A) Standard K-Fold Cross-Validation.
    B) Time-Series Cross-Validation (e.g., rolling origin).
    C) Leave-one-out Cross-Validation.
    D) Stratified K-Fold Cross-Validation.

    Correct Answer: B
97. The **No Free Lunch Theorem** suggests that if algorithm A performs better than algorithm B on one class of problems, then:
    A) Algorithm A will perform better on all other problems.
    B) Algorithm B must perform better on some other class of problems.
    C) Both algorithms will perform equally well on all other problems.
    D) Neither algorithm is suitable for the problem.

    Correct Answer: A
98. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking all weights towards zero uniformly.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
99. In **Semi-supervised Learning**, the process of using a model's own predictions on unlabeled data as "pseudo-labels" for further training is called:
    A) Co-training.
    B) Self-training.
    C) Active learning.
    D) Transfer learning.

    Correct Answer: B
100. A company is building a system to detect manufacturing defects in product images. This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Binary Classification (Defect/No Defect).
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: C
101. The **VC Dimension** provides a measure of a hypothesis class's:
    A) Computational efficiency.
    B) Capacity or expressive power.
    C) Algorithmic stability.
    D) Training time.

    Correct Answer: B
102. **Structural Risk Minimization (SRM)** seeks to minimize the sum of the **empirical risk** and a term related to:
    A) The size of the dataset.
    B) The complexity of the hypothesis class.
    C) The learning rate.
    D) The number of features.

    Correct Answer: B
103. Which of the following is a key component of the **Bias-Variance Trade-off**?
    A) The irreducible error.
    B) The regularization parameter.
    C) The batch size.
    D) The optimizer choice.

    Correct Answer: C
104. A practical use case for machine learning where the goal is to predict the number of customers who will visit a store tomorrow is an example of:
    A) Classification.
    B) Regression (Count/Time-series).
    C) Clustering.
    D) Semi-supervised learning.

    Correct Answer: B
105. **Occam's Razor** is a principle that guides the selection of a model with:
    A) The highest test accuracy.
    B) The lowest training error.
    C) The lowest complexity for a given performance level.
    D) The fastest prediction time.

    Correct Answer: A
106. A model is trained on a dataset of patient records, and a small change in one patient's record causes a significant change in the model's parameters. This indicates:
    A) High algorithmic stability.
    B) Low algorithmic stability.
    C) Low variance.
    D) High bias.

    Correct Answer: B
107. Which of the following is a technique for **model validation** that is particularly useful for imbalanced datasets?
    A) K-Fold Cross-Validation.
    B) Stratified K-Fold Cross-Validation.
    C) Leave-one-out Cross-Validation.
    D) Hold-out Cross-Validation.

    Correct Answer: D
108. The **No Free Lunch Theorem** suggests that an algorithm's performance is best evaluated:
    A) On a single, large benchmark dataset.
    B) Across a wide range of problem types.
    C) By its theoretical complexity.
    D) By its training speed.

    Correct Answer: C
109. What is the VC dimension of the hypothesis class of all intervals on the real line ($R^1$)?
    A) 1
    B) 2
    C) 3
    D) Infinite

    Correct Answer: C
110. In **L1 Regularization**, the penalty term is proportional to the sum of the **absolute values** of the weights, which is also known as the:
    A) L2 norm.
    B) L1 norm.
    C) Frobenius norm.
    D) Infinity norm.

    Correct Answer: B
111. A model that is **overfitting** is essentially:
    A) Learning the signal but not the noise.
    B) Learning the noise in the training data as if it were signal.
    C) Failing to learn the signal.
    D) Achieving a perfect balance of bias and variance.

    Correct Answer: D
112. **Semi-supervised learning** is often used in domains where:
    A) Data is scarce.
    B) Labeling data is a costly and time-consuming process.
    C) The problem is inherently linear.
    D) The output is a continuous value.

    Correct Answer: A
113. Which of the following is a practical use case for **Unsupervised Learning**?
    A) Predicting the next word in a sentence.
    B) Detecting fraudulent transactions.
    C) Anomaly detection in server logs.
    D) Forecasting quarterly revenue.

    Correct Answer: C
114. The **Bias-Variance Trade-off** suggests that a model with very low bias must necessarily have:
    A) Very low variance.
    B) High variance.
    C) Low complexity.
    D) High interpretability.

    Correct Answer: A
115. What is the main goal of **Regularization** in machine learning?
    A) To increase the model's complexity.
    B) To prevent overfitting and improve generalization.
    C) To speed up the training process.
    D) To reduce the number of features.

    Correct Answer: B
116. The **VC Dimension** is a theoretical concept that helps to bound the difference between:
    A) Training error and test error.
    B) Bias and variance.
    C) L1 and L2 norms.
    D) Supervised and unsupervised learning.

    Correct Answer: A
117. **Structural Risk Minimization (SRM)** is a principle derived from:
    A) Bayesian statistics.
    B) Vapnik-Chervonenkis (VC) theory.
    C) The No Free Lunch Theorem.
    D) Occam's Razor.

    Correct Answer: B
118. A model is trained to identify the language of a given text. This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
119. The **No Free Lunch Theorem** is a mathematical result that applies to:
    A) Optimization algorithms.
    B) Supervised learning algorithms.
    C) All search and optimization algorithms.
    D) Only deep learning algorithms.

    Correct Answer: B
120. Which of the following is a technique for **model selection** that involves iteratively splitting the data into training and validation sets?
    A) Feature scaling.
    B) K-Fold Cross-Validation.
    C) Principal Component Analysis.
    D) Gradient Descent.

    Correct Answer: A
121. The **Irreducible Error** in the total error of a model is due to:
    A) The model's complexity.
    B) The inherent noise in the data generation process.
    C) The choice of the learning algorithm.
    D) The size of the training set.

    Correct Answer: B
122. **Algorithmic stability** is often achieved by using:
    A) Very complex models.
    B) Strong regularization techniques.
    C) Small training datasets.
    D) High learning rates.

    Correct Answer: B
123. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a self-driving car's control system.
    B) Predicting the next frame in a video.
    C) Training a spam filter with a small set of labeled emails and a large set of unlabeled emails.
    D) Generating new images from a text prompt.

    Correct Answer: A
124. The **Occam's Razor** principle in machine learning is a preference for:
    A) Models with more parameters.
    B) Models with fewer parameters.
    C) Models with higher training error.
    D) Models with lower test error.

    Correct Answer: B
125. The VC dimension of the hypothesis class of all half-spaces in $R^3$ is:
    A) 3
    B) 4
    C) 5
    D) Infinite

    Correct Answer: B
126. **Lasso Regression** (L1) is known for its ability to produce a **sparse** model, meaning:
    A) The model is very complex.
    B) Many of the model's weights are exactly zero.
    C) The model uses a small subset of the training data.
    D) The model has a low bias.

    Correct Answer: B
127. A model is trained to predict the rating (1 to 5 stars) a user will give to a movie. This is a **Supervised Learning** task, specifically:
    A) Binary Classification.
    B) Multi-class Classification.
    C) Regression.
    D) Clustering.

    Correct Answer: C
128. The **Bias-Variance Trade-off** suggests that a good model should aim for:
    A) Minimizing both bias and variance simultaneously.
    B) High bias and low variance.
    C) Low bias and high variance.
    D) A balance between bias and variance.

    Correct Answer: B
129. **Model selection** is a crucial step in the machine learning workflow because:
    A) It ensures the model is deployed correctly.
    B) It prevents the model from being trained too long.
    C) It helps choose the model that will generalize best to unseen data.
    D) It is required for all unsupervised learning tasks.

    Correct Answer: C
130. The **No Free Lunch Theorem** implies that the performance of an algorithm is averaged over:
    A) All possible datasets.
    B) All possible loss functions.
    C) All possible problem distributions.
    D) All possible hardware configurations.

    Correct Answer: B
131. Which of the following is a practical use case for **Unsupervised Learning**?
    A) Predicting a customer's age.
    B) Grouping genes with similar expression patterns.
    C) Identifying the sentiment of a tweet.
    D) Forecasting the weather.

    Correct Answer: C
132. **L2 Regularization** adds a penalty term proportional to the sum of the **squared** weights, which is also known as the:
    A) L1 norm.
    B) L2 norm.
    C) Manhattan distance.
    D) Hamming distance.

    Correct Answer: B
133. A model is trained on a dataset where the input features are completely irrelevant to the output variable. The model will likely exhibit:
    A) Low bias and low variance.
    B) High bias and low variance.
    C) Low bias and high variance.
    D) High bias and high variance.

    Correct Answer: B
134. **Non-uniform learnability** is a concept that acknowledges the role of the **target concept** in determining:
    A) The required sample complexity.
    B) The computational cost.
    C) The choice of regularization.
    D) The model's interpretability.

    Correct Answer: B
135. Which of the following is a technique for **model validation** that involves splitting the data into $K$ equal parts?
    A) Bootstrap sampling.
    B) K-Means Clustering.
    C) K-Fold Cross-Validation.
    D) Principal Component Analysis.

    Correct Answer: B
136. The **VC Dimension** of a hypothesis class is a measure of its:
    A) Ability to fit any labeling of a finite set of points.
    B) Computational speed.
    C) Memory footprint.
    D) Training time.

    Correct Answer: A
137. **Structural Risk Minimization (SRM)** is a theoretical approach to minimize the **generalization error** by selecting a hypothesis class with an appropriate:
    A) Learning rate.
    B) VC dimension.
    C) Batch size.
    D) Number of epochs.

    Correct Answer: B
138. A model is trained to predict the next character in a sequence of text. This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Sequence Generation.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
139. The **Occam's Razor** principle suggests that a model should be as simple as possible, but not:
    A) Too complex.
    B) Too slow.
    C) Simpler than necessary.
    D) Too accurate.

    Correct Answer: B
140. **Algorithmic stability** is particularly important in scenarios where:
    A) The training data is very large.
    B) The training data is small and noisy.
    C) The model is a simple linear regression.
    D) The problem is purely unsupervised.

    Correct Answer: A
141. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a robot to navigate a maze.
    B) Image recognition where only a fraction of images are labeled.
    C) Predicting the temperature tomorrow.
    D) Finding the shortest path in a graph.

    Correct Answer: B
142. The **Bias-Variance Trade-off** is a fundamental concept that guides the choice of:
    A) The dataset size.
    B) The model's complexity.
    C) The number of features.
    D) The data preprocessing steps.

    Correct Answer: B
143. A model that is **underfitting** is characterized by:
    A) High bias and low variance.
    B) Low bias and high variance.
    C) High bias and high variance.
    D) Low bias and low variance.

    Correct Answer: B
144. **Regularization** techniques work by adding a penalty term to the loss function that is proportional to:
    A) The magnitude of the weights.
    B) The number of features.
    C) The size of the dataset.
    D) The training error.

    Correct Answer: B
145. The **No Free Lunch Theorem** implies that the choice of the best algorithm is:
    A) Independent of the problem.
    B) Dependent on the problem.
    C) Always a deep neural network.
    D) Always a linear model.

    Correct Answer: B
146. Which of the following is a technique for **model selection** that is used to prevent data leakage from the test set?
    A) Using a single hold-out test set.
    B) Using K-Fold Cross-Validation.
    C) Using L1 regularization.
    D) Using L2 regularization.

    Correct Answer: B
147. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Generalize to unseen data.
    B) Fit the training data perfectly.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
148. **Structural Risk Minimization (SRM)** aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: B
149. A model is trained to predict whether a patient has a specific disease (Yes/No). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Binary Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: A
150. The **Occam's Razor** principle suggests that a simpler model is preferred because it has a lower:
    A) Training error.
    B) Empirical risk.
    C) Generalization error bound.
    D) Computational cost.

    Correct Answer: B
151. In **PAC learning**, the goal is to find a hypothesis $h$ that is **probably** close to the true concept $c$, with respect to:
    A) The training time.
    B) The error rate.
    C) The model complexity.
    D) The number of features.

    Correct Answer: B
152. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Overfitting.
    B) Underfitting.
    C) Generalization.
    D) Regularization.

    Correct Answer: B
153. Which of the following is a practical use case for **Unsupervised Learning**?
    A) Predicting the next customer purchase.
    B) Identifying the optimal number of clusters in a dataset.
    C) Classifying emails as spam or not spam.
    D) Forecasting the sales of a product.

    Correct Answer: B
154. The **Bias-Variance Trade-off** is a fundamental concept that applies to:
    A) Only linear models.
    B) Only deep neural networks.
    C) All machine learning models.
    D) Only supervised learning models.

    Correct Answer: B
155. **L1 Regularization** (Lasso) is often used for:
    A) Reducing the magnitude of all weights equally.
    B) Feature selection and creating sparse models.
    C) Handling multi-collinearity.
    D) Speeding up the training process.

    Correct Answer: A
156. A model that is **overfitting** is characterized by a large gap between:
    A) Bias and variance.
    B) Training error and test error.
    C) L1 and L2 norms.
    D) Supervised and unsupervised learning.

    Correct Answer: B
157. The **No Free Lunch Theorem** implies that there is no single algorithm that is universally:
    A) Fast.
    B) Accurate.
    C) Optimal.
    D) Interpretable.

    Correct Answer: B
158. Which of the following is a technique for **model validation** that is particularly useful for small datasets?
    A) Hold-out validation.
    B) Leave-one-out Cross-Validation (LOOCV).
    C) Stratified K-Fold Cross-Validation.
    D) Nested Cross-Validation.

    Correct Answer: A
159. The **VC Dimension** of a hypothesis class is a measure of its **expressive power**, which is directly related to its potential for:
    A) Underfitting.
    B) Overfitting.
    C) Algorithmic stability.
    D) Computational efficiency.

    Correct Answer: B
160. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **complexity term**, where the complexity term is a function of:
    A) The number of features.
    B) The VC dimension.
    C) The learning rate.
    D) The batch size.

    Correct Answer: B
161. A model is trained to predict the amount of rainfall tomorrow. This is a **Supervised Learning** task, specifically:
    A) Classification.
    B) Regression.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
162. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: B
163. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
164. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: A
165. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
166. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
167. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: A
168. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
169. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
170. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
171. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: B
172. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
173. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: A
174. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
175. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
176. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: A
177. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
178. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
179. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
180. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
181. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
182. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: A
183. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
184. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: B
185. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
186. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
187. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
188. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
189. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
190. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
191. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: A
192. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
193. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: B
194. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
195. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: A
196. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
197. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
198. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
199. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
200. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
201. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
202. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
203. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
204. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: A
205. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
206. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: B
207. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
208. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
209. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
210. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: A
211. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
212. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
213. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: A
214. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
215. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: B
216. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
217. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: B
218. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
219. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: A
220. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
221. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
222. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: A
223. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
224. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
225. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
226. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: B
227. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
228. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: A
229. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
230. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
231. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: A
232. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
233. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
234. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: A
235. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
236. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
237. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: A
238. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
239. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: B
240. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
241. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
242. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
243. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: A
244. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
245. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
246. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
247. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: A
248. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: B
249. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
250. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    C) More accurate on the training data.

    Correct Answer: B
251. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
252. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
253. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
254. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: C
255. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
256. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: D
257. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
258. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: C
259. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: C
260. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: B
261. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: C
262. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
263. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: C
264. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: C
265. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: C
266. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
267. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
268. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
269. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
270. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: C
271. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: C
272. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: C
273. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
274. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
275. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: C
276. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
277. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: C
278. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
279. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
280. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
281. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: B
282. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: C
283. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: B
284. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
285. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
286. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: B
287. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
288. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
289. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.

    Correct Answer: B
290. Which of the following is a technique for **model validation** that is used to estimate the performance of the model on unseen data?
    A) Feature scaling.
    B) Cross-Validation.
    C) One-hot encoding.
    D) Gradient Descent.

    Correct Answer: B
291. The **VC Dimension** of a hypothesis class is a measure of its ability to:
    A) Fit the training data perfectly.
    B) Generalize to unseen data.
    C) Converge quickly.
    D) Handle missing values.

    Correct Answer: B
292. **Structural Risk Minimization (SRM)** is a principle that aims to minimize the sum of the **empirical risk** and the **confidence interval**, where the confidence interval is a function of:
    A) The training time.
    B) The VC dimension.
    C) The number of features.
    D) The learning rate.

    Correct Answer: A
293. A model is trained to predict the category of a news article (e.g., Sports, Politics, Finance). This is a **Supervised Learning** task, specifically:
    A) Regression.
    B) Multi-class Classification.
    C) Clustering.
    D) Dimensionality Reduction.

    Correct Answer: C
294. The **Occam's Razor** principle suggests that a simpler model is preferred because it is:
    A) Easier to implement.
    B) More likely to generalize well.
    C) Faster to train.
    D) More accurate on the training data.

    Correct Answer: D
295. **Algorithmic stability** is a property that is closely related to the concept of:
    A) Generalization error.
    B) Irreducible error.
    C) Bias.
    D) Variance.

    Correct Answer: B
296. Which of the following is a practical use case for **Semi-supervised Learning**?
    A) Training a model to predict the outcome of a coin flip.
    B) Training a model to segment medical images where only a few are expertly annotated.
    C) Training a model to generate new music.
    D) Training a model to find the shortest path in a graph.

    Correct Answer: B
297. The **Bias-Variance Trade-off** suggests that a model with very low variance must necessarily have:
    A) Very low bias.
    B) High bias.
    C) High complexity.
    D) Low interpretability.

    Correct Answer: C
298. **L2 Regularization** (Ridge) is effective at:
    A) Setting weights to exactly zero.
    B) Shrinking weights towards zero, but rarely to exactly zero.
    C) Increasing the complexity of the model.
    D) Eliminating the bias term.

    Correct Answer: B
299. A model that is **underfitting** is characterized by:
    A) High training error and high test error.
    B) Low training error and high test error.
    C) Low training error and low test error.
    D) High training error and low test error.

    Correct Answer: B
300. The **No Free Lunch Theorem** implies that the search for the best algorithm should be guided by:
    A) The size of the dataset.
    B) The characteristics of the problem.
    C) The computational power available.
    D) The latest research papers.


*   Clustering techniques: K-Means and its variants, Hierarchical clustering
*   Dimensionality reduction techniques: Principal Component Analysis (PCA), Kernel PCA, Linear Discriminant Analysis (LDA), Random projections
*   Fundamentals of information theory


    Correct Answer: A
301. Which of the following is the primary objective function that the K-Means clustering algorithm seeks to minimize?
    A) The total number of clusters.
    B) The sum of squared distances between data points and their assigned cluster centroids.
    C) The maximum distance between any two points in the same cluster.
    D) The total variance of the dataset.

    Correct Answer: B
302. A data scientist is applying K-Means to a dataset and notices that the final clusters are highly dependent on the initial random placement of the centroids. Which variant of K-Means is specifically designed to mitigate this issue?
    A) Mini-Batch K-Means.
    B) K-Medoids.
    C) K-Means++.
    D) Hierarchical K-Means.

    Correct Answer: B
303. In the context of Hierarchical Clustering, what is the key difference between the **Agglomerative** and **Divisive** approaches?
    A) Agglomerative is non-deterministic, while Divisive is deterministic.
    B) Agglomerative is a bottom-up approach, while Divisive is a top-down approach.
    C) Agglomerative is used for large datasets, while Divisive is for small datasets.
    D) Agglomerative requires a predefined number of clusters, while Divisive does not.

    Correct Answer: B
304. Which linkage criterion in Agglomerative Hierarchical Clustering is most susceptible to the "chaining" effect, where clusters are forced together due to a single close pair of points?
    A) Ward's linkage.
    B) Complete linkage.
    C) Average linkage.
    D) Single linkage.

    Correct Answer: A
305. Principal Component Analysis (PCA) is a dimensionality reduction technique that works by:
    A) Selecting a subset of the original features that have the highest variance.
    B) Projecting the data onto a lower-dimensional subspace that maximizes the variance of the projected data.
    C) Finding a non-linear mapping to a lower-dimensional space.
    D) Minimizing the reconstruction error between the original and projected data in the original feature space.

    Correct Answer: D
306. A key assumption of standard Principal Component Analysis (PCA) is that the relationship between variables is:
    A) Non-linear.
    B) Exponential.
    C) Linear.
    D) Categorical.

    Correct Answer: B
307. When should a data scientist consider using **Kernel PCA** instead of standard PCA?
    A) When the dataset is too large for standard PCA.
    B) When the data is linearly separable in the original feature space.
    C) When the data has a non-linear structure that needs to be captured in the lower-dimensional space.
    D) When the goal is to maximize the separation between classes.

    Correct Answer: A
308. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique often compared to PCA. What is the fundamental difference in their objectives?
    A) PCA is supervised, while LDA is unsupervised.
    B) PCA maximizes variance, while LDA maximizes the separation between known classes.
    C) PCA is non-linear, while LDA is linear.
    D) PCA is for classification, while LDA is for regression.

    Correct Answer: B
309. A major advantage of using **Random Projections** for dimensionality reduction over PCA is:
    A) It guarantees a better representation of the data.
    B) It is computationally much faster, especially for very high-dimensional data.
    C) It is a supervised technique that uses class labels.
    D) It can handle non-linear data structures better than PCA.

    Correct Answer: C
310. In the context of Information Theory, **Entropy** is a measure of:
    A) The size of the dataset.
    B) The purity of a cluster.
    C) The uncertainty or randomness in a set of data.
    D) The correlation between two variables.

    Correct Answer: B
311. What is the concept of **Mutual Information** used to quantify in a machine learning context?
    A) The total variance in the dataset.
    B) The reduction in uncertainty about one random variable given the knowledge of another.
    C) The distance between two cluster centroids.
    D) The complexity of a decision tree.

    Correct Answer: B
312. A common method for determining the optimal number of clusters ($K$) in K-Means is the **Elbow Method**. What characteristic of the plot is used to identify the optimal $K$?
    A) The point where the inertia (WSS) starts to increase sharply.
    B) The point where the inertia (WSS) starts to decrease sharply.
    C) The point where the rate of decrease in inertia slows down significantly.
    D) The point where the silhouette score is minimized.

    Correct Answer: B
313. The **Silhouette Score** is a metric used to evaluate the quality of clustering. A score close to +1 indicates:
    A) The data point is far from its own cluster.
    B) The data point is close to the boundary between two clusters.
    C) The data point is well-matched to its own cluster and poorly matched to neighboring clusters.
    D) The clustering is random.

    Correct Answer: B
314. Which of the following is a key limitation of the standard K-Means algorithm?
    A) It can only handle categorical data.
    B) It struggles to form non-convex or irregularly shaped clusters.
    C) It is computationally too slow for small datasets.
    D) It requires the data to be normally distributed.

    Correct Answer: B
315. In Agglomerative Hierarchical Clustering, the **dendrogram** is a visual representation that primarily shows:
    A) The final cluster assignments.
    B) The distance between all pairs of data points.
    C) The sequence of merges or splits and the distance at which they occurred.
    D) The distribution of data within each cluster.

    Correct Answer: B
316. When performing PCA, the **eigenvectors** of the covariance matrix represent:
    A) The mean of the data.
    B) The principal components (directions of maximum variance).
    C) The amount of variance explained by each component.
    D) The number of features in the original dataset.

    Correct Answer: A
317. The **eigenvalues** in PCA correspond to:
    A) The number of data points.
    B) The variance of the data along the corresponding principal component.
    C) The correlation between the original features.
    D) The reconstruction error.

    Correct Answer: C
318. Why is it generally recommended to **standardize** or **normalize** the data before applying PCA?
    A) To ensure the principal components are orthogonal.
    B) To prevent features with larger scales from dominating the components.
    C) To make the data normally distributed.
    D) To reduce the computational complexity.

    Correct Answer: D
319. **Linear Discriminant Analysis (LDA)** is most effective when the goal is to:
    A) Find the best representation for data visualization.
    B) Maximize the ratio of between-class scatter to within-class scatter.
    C) Minimize the total variance of the data.
    D) Identify the intrinsic dimensionality of the data.

    Correct Answer: B
320. The **Johnson–Lindenstrauss lemma** provides the theoretical foundation for:
    A) K-Means clustering convergence.
    B) The effectiveness of Random Projections.
    C) The non-linear mapping in Kernel PCA.
    D) The optimal number of clusters in Hierarchical Clustering.

    Correct Answer: B
321. In Information Theory, **Conditional Entropy** $H(Y|X)$ measures:
    A) The uncertainty of $Y$ before observing $X$.
    B) The uncertainty of $X$ after observing $Y$.
    C) The remaining uncertainty of $Y$ given that $X$ is known.
    D) The total information shared between $X$ and $Y$.

    Correct Answer: C
322. Which clustering algorithm is a **density-based** method that can discover clusters of arbitrary shape and does not require the number of clusters to be specified beforehand?
    A) K-Means.
    B) Hierarchical Clustering.
    C) DBSCAN (Density-Based Spatial Clustering of Applications with Noise).
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
323. A key difference between **K-Means** and **Gaussian Mixture Models (GMM)** is that GMM:
    A) Assigns each data point to exactly one cluster.
    B) Assumes clusters are spherical and equally sized.
    C) Provides a probabilistic assignment of data points to clusters.
    D) Is a non-parametric clustering method.

    Correct Answer: B
324. In Hierarchical Clustering, the **Ward's linkage** criterion merges the pair of clusters that results in the minimum increase in:
    A) The distance between the farthest points.
    B) The sum of squared errors (variance) within the merged cluster.
    C) The distance between the closest points.
    D) The average distance between all points in the two clusters.

    Correct Answer: B
325. When using PCA for data compression, the **reconstruction error** is defined as the difference between:
    A) The original data and the data projected onto the principal components.
    B) The original data and the data reconstructed from the projected components.
    C) The variance explained by the components and the total variance.
    D) The training error and the test error.

    Correct Answer: B
326. Which of the following is a non-linear dimensionality reduction technique that focuses on preserving the local structure of the data, often used for visualization?
    A) PCA.
    B) LDA.
    C) t-SNE (t-distributed Stochastic Neighbor Embedding).
    D) Random Projections.

    Correct Answer: B
327. **Information Gain**, a concept from Information Theory, is widely used in which supervised learning algorithm for feature selection?
    A) Support Vector Machines.
    B) K-Nearest Neighbors.
    C) Decision Trees.
    D) Linear Regression.

    Correct Answer: B
328. The **Curse of Dimensionality** in machine learning primarily refers to the phenomenon where:
    A) The computational cost of algorithms decreases exponentially with the number of features.
    B) The data becomes increasingly sparse as the number of dimensions increases, making generalization difficult.
    C) The number of data points must decrease as the number of features increases.
    D) All machine learning algorithms fail in high-dimensional spaces.

    Correct Answer: B
329. In K-Means clustering, the **centroid** of a cluster is calculated as:
    A) The median of all points in the cluster.
    B) The mode of all points in the cluster.
    C) The mean of all points in the cluster.
    D) The point closest to the center of the cluster (medoid).

    Correct Answer: A
330. Which of the following is a key advantage of **Mini-Batch K-Means** over standard K-Means?
    A) It guarantees a better global optimum.
    B) It is significantly faster for very large datasets.
    C) It can handle non-convex clusters.
    D) It does not require the number of clusters to be specified.

    Correct Answer: D
331. In Hierarchical Clustering, the **dendrogram height** at which two clusters are merged represents:
    A) The number of data points in the merged cluster.
    B) The distance or dissimilarity between the two clusters.
    C) The variance of the merged cluster.
    D) The average feature value of the merged cluster.

    Correct Answer: B
332. When applying PCA, how does one typically decide on the optimal number of principal components to retain?
    A) By selecting the number of components equal to the number of original features.
    B) By choosing the number of components that explain a cumulative variance threshold (e.g., 90%).
    C) By selecting the components with the smallest eigenvalues.
    D) By using the number of classes in the dataset.

    Correct Answer: A
333. **Linear Discriminant Analysis (LDA)** is fundamentally a **supervised** dimensionality reduction technique because it:
    A) Requires the input features to be linear.
    B) Uses the class labels to find the optimal projection.
    C) Maximizes the total variance of the data.
    D) Can only be used for classification tasks.

    Correct Answer: B
334. The **Kullback-Leibler (KL) Divergence** is a measure from Information Theory that quantifies:
    A) The distance between two data points.
    B) The similarity between two probability distributions.
    C) The total entropy of a system.
    D) The information gain of a feature.

    Correct Answer: C
335. A data scientist is performing customer segmentation and wants to ensure that the resulting clusters are robust to outliers. Which clustering algorithm is generally more robust to outliers than K-Means?
    A) K-Means++.
    B) K-Medoids.
    C) DBSCAN.
    D) Agglomerative Clustering (Single Linkage).

    Correct Answer: B
336. In the context of DBSCAN, what does the **$\epsilon$ (epsilon)** parameter define?
    A) The minimum number of points required to form a dense region.
    B) The maximum radius to consider for a neighborhood of a point.
    C) The number of clusters to be formed.
    D) The maximum distance between two clusters.

    Correct Answer: B
337. Which of the following is a major drawback of **Hierarchical Clustering** compared to K-Means?
    A) It is less interpretable.
    B) It is computationally more expensive, especially for large datasets ($O(n^3)$ or $O(n^2)$).
    C) It cannot handle categorical data.
    D) It requires the number of clusters to be specified beforehand.

    Correct Answer: B
338. **Kernel PCA** achieves non-linear dimensionality reduction by implicitly mapping the data to a higher-dimensional feature space using the **kernel trick** and then performing:
    A) Linear Regression.
    B) Standard PCA.
    C) K-Means Clustering.
    D) Linear Discriminant Analysis.

    Correct Answer: B
339. The **Scree Plot** in PCA is used to:
    A) Visualize the data in the reduced dimension.
    B) Determine the optimal number of principal components to retain.
    C) Plot the correlation matrix.
    D) Show the distribution of the original features.

    Correct Answer: B
340. **Random Projections** rely on the fact that a set of points in a high-dimensional space can be projected onto a randomly chosen lower-dimensional subspace such that the **distances** between the points are approximately preserved. This is a consequence of:
    A) The Central Limit Theorem.
    B) The Johnson–Lindenstrauss lemma.
    C) The No Free Lunch Theorem.
    D) Occam's Razor.

    Correct Answer: B
341. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: A
342. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: C
343. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: D
344. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
345. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
346. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: C
347. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
348. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
349. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
350. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
351. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
352. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
353. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
354. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: A
355. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: D
356. In Information Theory, **Information Gain** is calculated as the difference between:
    A) The entropy of the target variable and the conditional entropy of the target given the feature.
    B) The conditional entropy of the target given the feature and the entropy of the target variable.
    C) The joint entropy and the mutual information.
    D) The KL divergence and the cross-entropy.

    Correct Answer: B
357. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: A
358. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
359. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
360. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
361. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
362. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
363. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
364. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
365. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
366. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: A
367. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: C
368. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: D
369. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
370. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
371. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: C
372. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
373. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
374. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
375. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
376. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
377. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
378. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
379. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: A
380. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: D
381. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
382. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: A
383. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
384. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: C
385. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
386. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
387. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
388. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
389. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
390. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
391. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: A
392. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: C
393. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: D
394. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
395. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
396. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
397. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
398. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
399. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
400. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
401. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
402. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
403. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
404. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: A
405. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: D
406. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
407. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: A
408. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
409. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: C
410. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
411. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
412. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
413. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
414. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
415. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
416. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: A
417. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: C
418. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: D
419. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
420. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
421. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: C
422. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
423. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
424. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
425. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
426. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
427. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
428. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
429. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: A
430. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: D
431. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
432. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: A
433. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
434. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
435. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
436. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
437. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
438. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
439. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
440. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
441. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: A
442. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: C
443. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: D
444. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
445. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
446. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: C
447. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
448. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
449. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
450. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: A
451. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: C
452. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: D
453. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
454. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: A
455. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: C
456. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
457. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
458. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
459. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
460. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
461. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
462. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
463. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: A
464. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
465. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
466. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: A
467. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
468. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: C
469. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
470. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
471. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
472. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
473. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
474. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
475. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: A
476. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: C
477. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: D
478. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
479. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: A
480. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: C
481. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
482. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
483. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
484. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
485. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
486. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
487. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
488. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: A
489. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: C
490. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
491. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: A
492. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
493. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: C
494. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
495. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
496. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
497. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
498. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
499. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
500. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: A
501. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
502. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: D
503. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
504. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: A
505. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: C
506. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
507. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
508. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
509. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
510. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
511. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
512. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
513. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: A
514. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: C
515. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
516. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: A
517. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
518. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: C
519. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
520. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
521. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
522. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
523. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
524. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
525. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: A
526. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: C
527. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: D
528. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
529. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: A
530. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: C
531. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
532. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
533. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
534. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
535. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
536. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
537. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
538. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: A
539. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
540. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
541. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: A
542. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
543. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: C
544. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
545. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
546. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
547. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
548. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: B
549. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: B
550. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: A
551. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: C
552. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: D
553. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
554. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: A
555. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: C
556. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
557. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
558. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
559. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
560. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: B
561. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
562. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
563. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: A
564. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: C
565. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
566. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: A
567. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
568. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: C
569. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
570. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
571. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: B
572. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
573. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: B
574. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
575. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: C
576. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
577. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: B
578. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: C
579. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: A
580. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
581. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
582. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
583. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: B
584. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: B
585. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.

    Correct Answer: B
586. **Linear Discriminant Analysis (LDA)** is a dimensionality reduction technique that is particularly useful for:
    A) Unsupervised feature extraction.
    B) Maximizing the separation of classes in the reduced space.
    C) Handling non-linear data.
    D) Dealing with a large number of features and a small number of samples.

    Correct Answer: C
587. The main idea behind **Random Projections** is that:
    A) A random projection is likely to preserve the distances between points.
    B) A random projection is likely to maximize the variance of the data.
    C) A random projection is likely to maximize the separation of classes.
    D) A random projection is likely to find the intrinsic dimensionality.

    Correct Answer: B
588. In Information Theory, **Joint Entropy** $H(X, Y)$ measures:
    A) The uncertainty of $X$ alone.
    B) The uncertainty of $Y$ alone.
    C) The total uncertainty of the pair $(X, Y)$.
    D) The shared information between $X$ and $Y$.

    Correct Answer: C
589. Which clustering algorithm is a **model-based** approach that assumes the data points are generated from a mixture of several Gaussian distributions?
    A) K-Means.
    B) DBSCAN.
    C) Hierarchical Clustering.
    D) Gaussian Mixture Models (GMM).

    Correct Answer: B
590. The **DBSCAN** algorithm classifies points into three categories: **Core**, **Border**, and **Noise**. A **Border** point is one that:
    A) Has at least a minimum number of points within its $\epsilon$-neighborhood.
    B) Is within the $\epsilon$-neighborhood of a Core point but is not a Core point itself.
    C) Is not a Core point and is not within the $\epsilon$-neighborhood of any Core point.
    D) Is an outlier and is removed from the dataset.

    Correct Answer: D
591. In Hierarchical Clustering, the **Single Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
592. **Kernel PCA** is a generalization of PCA that uses the **kernel trick** to:
    A) Speed up the computation.
    B) Handle non-linear relationships in the data.
    C) Reduce the number of features.
    D) Maximize the separation of classes.

    Correct Answer: A
593. The **Scree Plot** in PCA plots the **eigenvalues** against:
    A) The original features.
    B) The cumulative explained variance.
    C) The number of principal components.
    D) The number of data points.

    Correct Answer: C
594. **Linear Discriminant Analysis (LDA)** is limited in its application because it assumes that the data is:
    A) Non-linearly separable.
    B) Normally distributed and the classes share the same covariance matrix.
    C) Uniformly distributed.
    D) Categorical.

    Correct Answer: A
595. **Random Projections** are particularly useful when dealing with data that is:
    A) Low-dimensional.
    B) Very sparse and high-dimensional.
    C) Non-linear.
    D) Categorical.

    Correct Answer: B
596. In Information Theory, **Cross-Entropy** is often used as a loss function in classification tasks. It measures:
    A) The uncertainty of the true distribution.
    B) The difference between the true probability distribution and the predicted probability distribution.
    C) The total information content of the features.
    D) The complexity of the model.

    Correct Answer: B
597. Which of the following is a key step in the **K-Means** algorithm?
    A) Calculating the distance between all pairs of points.
    B) Iteratively reassigning points to the nearest centroid and recalculating the centroids.
    C) Merging the two closest clusters.
    D) Finding the density of points in a neighborhood.

    Correct Answer: B
598. A data scientist is using **K-Means** and wants to ensure that the initial centroids are well-separated. Which initialization method should be used?
    A) Random initialization.
    B) K-Means++.
    C) Farthest-first traversal.
    D) Uniform initialization.

    Correct Answer: A
599. In **Agglomerative Hierarchical Clustering**, the **Complete Linkage** criterion defines the distance between two clusters as:
    A) The minimum distance between any two points in the two clusters.
    B) The maximum distance between any two points in the two clusters.
    C) The average distance between all pairs of points in the two clusters.
    D) The distance between the centroids of the two clusters.

    Correct Answer: C
600. When using PCA, the **cumulative explained variance ratio** plot helps in:
    A) Visualizing the data distribution.
    B) Determining the trade-off between dimensionality reduction and information loss.
    C) Identifying the outliers in the dataset.
    D) Calculating the correlation between features.


*   Classification and regression techniques: k-Nearest Neighbors (KNN), Decision Trees, Bayesian analysis, Naïve Bayes classifier, Random Forest, Gradient Boosting Machines, Support Vector Machines (SVM), XGBoost, CatBoost, Linear regression, Non-linear regression
*   Ensemble learning principles
*   Time-series forecasting techniques


    Correct Answer: B
601. In **k-Nearest Neighbors (KNN)** classification, what is the primary role of the parameter $k$?
    A) It defines the radius of the neighborhood to consider.
    B) It specifies the number of features to use in the distance calculation.
    C) It determines the number of neighbors whose class labels are consulted for the prediction.
    D) It sets the maximum depth of the decision tree used for local classification.

    Correct Answer: B
602. A data scientist is using KNN for a classification task. The model is exhibiting high variance. Which adjustment to the parameter $k$ would most likely reduce this variance?
    A) Decreasing $k$ (e.g., from 10 to 3).
    B) Increasing $k$ (e.g., from 3 to 10).
    C) Using a weighted distance metric.
    D) Switching from Euclidean to Manhattan distance.

    Correct Answer: B
603. Which of the following is a key advantage of **Decision Trees** over linear models?
    A) They are less prone to overfitting.
    B) They are highly interpretable and can capture non-linear relationships.
    C) They are computationally efficient for very large datasets.
    D) They do not require any feature scaling or normalization.

    Correct Answer: B
604. In the construction of a Decision Tree, which metric is commonly used to determine the optimal split point at a node for a **classification** problem?
    A) Mean Squared Error (MSE).
    B) R-squared.
    C) Gini Impurity or Information Gain (Entropy).
    D) Area Under the Curve (AUC).

    Correct Answer: B
605. **Naïve Bayes** is a classification algorithm based on **Bayesian analysis**. The "Naïve" assumption refers to:
    A) The assumption that the features are conditionally independent given the class label.
    B) The assumption that the data is normally distributed.
    C) The assumption that the prior probabilities of all classes are equal.
    D) The assumption that the model is linear.

    Correct Answer: B
606. A major limitation of the **Naïve Bayes** classifier is the **zero-frequency problem**. Which technique is commonly used to address this issue?
    A) Feature scaling.
    B) Laplace smoothing (additive smoothing).
    C) Pruning the decision tree.
    D) Using a different kernel function.

    Correct Answer: C
607. **Random Forest** is an **ensemble learning** method. It reduces the variance of the model by combining the predictions of multiple Decision Trees. What two primary mechanisms contribute to the diversity of the individual trees?
    A) Using different regularization parameters and different learning rates.
    B) Training each tree on a different subset of the features and a different bootstrap sample of the data.
    C) Using different activation functions and different optimizers.
    D) Training some trees for classification and others for regression.

    Correct Answer: A
608. **Gradient Boosting Machines (GBM)**, such as XGBoost and CatBoost, build models sequentially. In each step, a new model is trained to predict:
    A) The original target variable.
    B) The residuals (errors) of the previous ensemble model.
    C) The weights of the previous model.
    D) The feature importance scores.

    Correct Answer: B
609. Which of the following is a key characteristic of **Support Vector Machines (SVM)**?
    A) They are primarily used for non-linear regression.
    B) They aim to find a hyperplane that maximizes the margin between the closest data points of different classes (support vectors).
    C) They are highly sensitive to the initial random weights.
    D) They are an example of a boosting ensemble method.

    Correct Answer: D
610. The **Kernel Trick** in SVM allows the algorithm to:
    A) Reduce the dimensionality of the feature space.
    B) Efficiently compute the dot product in a high-dimensional feature space without explicitly mapping the data.
    C) Handle missing values in the dataset.
    D) Convert a multi-class problem into a binary classification problem.

    Correct Answer: A
611. **XGBoost** (eXtreme Gradient Boosting) is a highly optimized and popular implementation of Gradient Boosting. A key feature that contributes to its performance and generalization is:
    A) Its use of a single, very deep decision tree.
    B) Its built-in regularization (L1 and L2) to prevent overfitting.
    C) Its reliance on the Naïve Bayes assumption.
    D) Its ability to handle only categorical features.

    Correct Answer: B
612. **CatBoost** is another Gradient Boosting library that is specifically designed to handle:
    A) Only numerical features.
    B) Categorical features efficiently and automatically.
    C) Only linear regression problems.
    D) Only time-series data.

    Correct Answer: B
613. In **Linear Regression**, the goal is to find the line that minimizes the sum of the squared differences between the observed values and the values predicted by the line. This is known as:
    A) Maximum Likelihood Estimation (MLE).
    B) Ordinary Least Squares (OLS).
    C) Gradient Descent.
    D) Bayesian Inference.

    Correct Answer: B
614. A model is attempting to fit a relationship that is clearly non-linear (e.g., an S-curve). Using a simple **Linear Regression** model would most likely result in:
    A) Overfitting.
    B) High variance.
    C) High bias (underfitting).
    D) A perfect fit.

    Correct Answer: B
615. **Ensemble Learning** methods are generally preferred over single models because they typically:
    A) Are simpler to implement.
    B) Reduce the generalization error by combining multiple weak learners.
    C) Are faster to train.
    D) Require less data.

    Correct Answer: C
616. Which of the following is an example of a **Bagging** ensemble method?
    A) Gradient Boosting Machines (GBM).
    B) AdaBoost.
    C) Random Forest.
    D) Stacking.

    Correct Answer: D
617. In **Time-series forecasting**, a model is trained to predict the value of a variable at the next time step based on its past values. This is known as:
    A) Cross-sectional analysis.
    B) Autoregressive modeling.
    C) Classification.
    D) Clustering.

    Correct Answer: A
618. A key challenge in **Time-series forecasting** is handling **seasonality**. Which component of a time-series decomposition model is used to capture this repeating pattern?
    A) Trend.
    B) Residual.
    C) Cyclical.
    D) Seasonal.

    Correct Answer: A
619. The **k-Nearest Neighbors (KNN)** algorithm is a **non-parametric** method. What does this imply?
    A) It does not make any assumptions about the underlying data distribution.
    B) It requires a large number of parameters to be tuned.
    C) It can only be used for classification.
    D) It is computationally very fast.

    Correct Answer: B
620. When using **Decision Trees** for a **regression** problem, which metric is used to determine the optimal split point at a node?
    A) Gini Impurity.
    B) Information Gain.
    C) Mean Squared Error (MSE) or Mean Absolute Error (MAE).
    D) Log Loss.

    Correct Answer: B
621. In **Bayesian analysis**, the **Posterior Probability** is proportional to the product of:
    A) The Likelihood and the Prior Probability.
    B) The Prior Probability and the Marginal Likelihood.
    C) The Likelihood and the Evidence.
    D) The Evidence and the Prior Probability.

    Correct Answer: B
622. A major drawback of **Naïve Bayes** is that its probability estimates are often inaccurate due to the strong independence assumption. However, it often performs surprisingly well in classification tasks because:
    A) It is a non-linear model.
    B) It is robust to irrelevant features.
    C) Classification accuracy is often more dependent on the correct ranking of probabilities than on their precise values.
    D) It implicitly performs feature selection.

    Correct Answer: C
623. **Random Forest** is known for its ability to provide a measure of **feature importance**. How is this typically calculated?
    A) By measuring the decrease in impurity (e.g., Gini or Entropy) when a feature is used for splitting, averaged over all trees.
    B) By calculating the correlation between the feature and the target variable.
    C) By the magnitude of the feature's weight in the final model.
    D) By the number of times the feature is selected for a split.

    Correct Answer: B
624. **Boosting** methods, like GBM and XGBoost, are generally more prone to **overfitting** than **Bagging** methods, like Random Forest. Why?
    A) Boosting trains models in parallel, which increases variance.
    B) Boosting trains models sequentially, focusing on correcting the errors of the previous models.
    C) Boosting uses a smaller subset of the data for each tree.
    D) Boosting uses deeper individual trees.

    Correct Answer: B
625. In **Support Vector Machines (SVM)**, the **soft margin** formulation introduces a penalty term for misclassified points. This penalty is controlled by which hyperparameter?
    A) The kernel parameter ($\gamma$).
    B) The regularization parameter ($C$).
    C) The margin width ($\rho$).
    D) The number of support vectors.

    Correct Answer: B
626. **XGBoost** uses a technique called **Shrinkage** (or learning rate) to:
    A) Reduce the computational time.
    B) Prevent overfitting by scaling the contribution of each tree.
    C) Increase the depth of the individual trees.
    D) Handle missing values.

    Correct Answer: B
627. **CatBoost** employs a novel technique to handle categorical features called **Ordered Target Encoding**. What is the primary benefit of this technique?
    A) It reduces the memory footprint of the model.
    B) It prevents target leakage and prediction shift during training.
    C) It allows the model to use only categorical features.
    D) It speeds up the prediction time.

    Correct Answer: A
628. In **Non-linear Regression**, which technique is commonly used to transform the input features to allow a linear model to fit a non-linear relationship?
    A) Polynomial feature expansion.
    B) Feature scaling.
    C) One-hot encoding.
    D) Principal Component Analysis (PCA).

    Correct Answer: B
629. **Stacking** is an **ensemble learning** technique where:
    A) Multiple models are trained on the same data, and their predictions are averaged.
    B) Models are trained sequentially, each correcting the errors of the previous one.
    C) The predictions of multiple base models are used as input features for a final meta-model (or blender).
    D) The data is split into multiple subsets, and a model is trained on each subset.

    Correct Answer: D
630. The **ARIMA** model is a popular technique for **Time-series forecasting**. The 'I' in ARIMA stands for **Integrated**, which refers to the process of:
    A) Incorporating external features into the model.
    B) Differencing the time series to make it stationary.
    C) Combining the predictions of multiple models.
    D) Using a non-linear activation function.

    Correct Answer: C
631. A key drawback of the **k-Nearest Neighbors (KNN)** algorithm is its high computational cost during the **prediction** phase, especially for large datasets. Why is this the case?
    A) It requires calculating the distance to all training points for every new prediction.
    B) It requires a complex matrix inversion.
    C) It involves an iterative optimization process.
    D) It needs to build a complex tree structure.

    Correct Answer: B
632. **Decision Trees** are highly susceptible to small variations in the training data, leading to high variance. This problem is primarily addressed by which technique?
    A) Increasing the maximum depth of the tree.
    B) Pruning the tree (pre-pruning or post-pruning).
    C) Using a different splitting criterion.
    D) Increasing the minimum number of samples per leaf.

    Correct Answer: B
633. In **Bayesian analysis**, the **Prior Probability** represents:
    A) The probability of the data given the hypothesis.
    B) The probability of the hypothesis before observing the data.
    C) The probability of the data.
    D) The probability of the hypothesis after observing the data.

    Correct Answer: D
634. The **Laplace smoothing** technique in **Naïve Bayes** is equivalent to adding a small constant (usually 1) to the count of every feature-class combination. This is done to:
    A) Increase the model's complexity.
    B) Prevent the probability of a feature-class combination from being zero.
    C) Speed up the training process.
    D) Improve the model's interpretability.

    Correct Answer: C
635. In **Random Forest**, the process of training each tree on a different bootstrap sample of the data is known as:
    A) Boosting.
    B) Bagging (Bootstrap Aggregating).
    C) Stacking.
    D) Pruning.

    Correct Answer: B
636. **Gradient Boosting Machines (GBM)** use a **loss function** to measure the error of the current ensemble. The new weak learner (e.g., a decision tree) is then trained to minimize this loss function by predicting the **negative gradient** of the loss function with respect to the current prediction. This is the core idea of:
    A) Stochastic Gradient Descent.
    B) Functional Gradient Descent.
    C) Backpropagation.
    D) Ordinary Least Squares.

    Correct Answer: A
637. In **Support Vector Machines (SVM)**, the **support vectors** are the data points that:
    A) Are farthest from the decision boundary.
    B) Lie closest to the decision boundary and influence its position and orientation.
    C) Are misclassified by the model.
    D) Are used to initialize the kernel function.

    Correct Answer: B
638. The **Radial Basis Function (RBF) Kernel** is a popular choice for SVM because it allows the model to:
    A) Only fit linear decision boundaries.
    B) Map the data to an infinite-dimensional feature space, enabling non-linear separation.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: A
639. **XGBoost** is known for its ability to handle **missing values** by:
    A) Imputing them with the mean or median.
    B) Treating them as a separate category.
    C) Learning the optimal direction for missing values to go at each split.
    D) Simply ignoring the samples with missing values.

    Correct Answer: B
640. **CatBoost** uses **Oblivious Trees** as its base learner. What is the defining characteristic of an Oblivious Tree?
    A) All nodes at the same level of the tree use the same feature and split value.
    B) The tree is always a binary tree.
    C) The tree is always a regression tree.
    D) The tree is always a classification tree.

    Correct Answer: B
641. In **Linear Regression**, the **$R^2$ (R-squared)** value is a measure of:
    A) The magnitude of the slope.
    B) The goodness of fit, representing the proportion of the variance in the dependent variable that is predictable from the independent variables.
    C) The training time of the model.
    D) The complexity of the model.

    Correct Answer: A
642. **Non-linear Regression** models can be implemented using techniques like:
    A) Polynomial Regression.
    B) Support Vector Regression (SVR) with a non-linear kernel.
    C) Neural Networks.
    D) All of the above.

    Correct Answer: B
643. **Boosting** and **Bagging** are two main categories of **Ensemble Learning**. What is the key difference in how they combine the predictions of the base models?
    A) Bagging uses a weighted average, while Boosting uses a simple average.
    B) Bagging trains models in parallel, while Boosting trains them sequentially.
    C) Bagging uses deep trees, while Boosting uses shallow trees.
    D) Bagging is for classification, while Boosting is for regression.

    Correct Answer: B
644. **Time-series forecasting** often involves checking for **stationarity**. A time series is considered **stationary** if:
    A) Its mean, variance, and autocorrelation structure do not change over time.
    B) It has a clear upward or downward trend.
    C) It exhibits a strong seasonal pattern.
    D) It is only composed of white noise.

    Correct Answer: C
645. The **k-Nearest Neighbors (KNN)** algorithm is often used as a baseline model because of its:
    A) High accuracy.
    B) Simplicity and lack of a formal training phase.
    C) Robustness to high-dimensional data.
    D) Ability to handle missing values.

    Correct Answer: A
646. **Decision Trees** can suffer from **overfitting**. Which technique is a form of **post-pruning**?
    A) Stopping the tree growth early based on a threshold.
    B) Growing the full tree and then removing branches that do not contribute significantly to the generalization performance.
    C) Limiting the maximum depth of the tree.
    D) Limiting the minimum number of samples per leaf.

    Correct Answer: B
647. In **Bayesian analysis**, the **Evidence** (or Marginal Likelihood) is the term that:
    A) Is always equal to 1.
    B) Normalizes the posterior probability.
    C) Represents the prior probability.
    D) Is the likelihood of the data.

    Correct Answer: B
648. The **zero-frequency problem** in **Naïve Bayes** is a critical issue because:
    A) It makes the model computationally expensive.
    B) It causes the posterior probability to become zero, regardless of the other evidence.
    C) It leads to high variance.
    D) It only affects the regression performance.

    Correct Answer: A
649. **Out-of-Bag (OOB) Error** is a concept specific to **Random Forest**. It is an estimate of the generalization error calculated by:
    A) Using a separate test set.
    B) Using the data points that were not included in the bootstrap sample for each tree.
    C) Averaging the training error of all trees.
    D) Using a cross-validation technique.

    Correct Answer: C
650. The core idea of **Boosting** is to sequentially train weak learners, where each new learner focuses on:
    A) The features that were most important in the previous learner.
    B) The data points that were correctly classified by the previous ensemble.
    C) The data points that were misclassified or had the largest residuals by the previous ensemble.
    D) A random subset of the data.

    Correct Answer: B
651. In **Support Vector Machines (SVM)**, the **margin** is defined as:
    A) The distance between the hyperplane and the origin.
    B) The distance between the two closest support vectors of different classes.
    C) The distance between the hyperplane and the farthest data point.
    D) The distance between the two parallel hyperplanes that separate the data.

    Correct Answer: B
652. The **Kernel Trick** in SVM is a powerful concept that allows the model to:
    A) Solve non-linear problems using linear algebra in a high-dimensional space.
    B) Reduce the computational complexity of the model.
    C) Handle time-series data.
    D) Perform feature selection.

    Correct Answer: C
653. **XGBoost** is known for its ability to parallelize the tree building process. How does it achieve this, despite being a sequential boosting algorithm?
    A) It parallelizes the search for the best split point at each node.
    B) It trains all trees simultaneously.
    C) It uses a different subset of the data for each tree.
    D) It uses a different subset of the features for each tree.

    Correct Answer: A
654. **CatBoost** uses a technique called **Permutation-based Training** to address:
    A) The problem of high variance.
    B) The problem of target leakage.
    C) The problem of missing values.
    D) The problem of non-linear data.

    Correct Answer: B
655. In **Linear Regression**, the assumption of **homoscedasticity** means that:
    A) The relationship between the features and the target is linear.
    B) The errors (residuals) have a constant variance across all levels of the independent variables.
    C) The errors are normally distributed.
    D) The independent variables are not correlated.

    Correct Answer: C
656. **Non-linear Regression** is necessary when:
    A) The data is too large for a linear model.
    B) The relationship between the features and the target cannot be adequately modeled by a straight line or a hyperplane.
    C) The target variable is categorical.
    D) The features are highly correlated.

    Correct Answer: A
657. **Bagging** (Bootstrap Aggregating) is primarily effective at reducing which component of the model's error?
    A) Bias.
    B) Variance.
    C) Irreducible error.
    D) Training error.

    Correct Answer: A
658. The **Moving Average (MA)** component in an **ARMA** or **ARIMA** model for **Time-series forecasting** accounts for:
    A) The trend in the data.
    B) The seasonal pattern.
    C) The dependency between an observation and a residual error from a moving average model applied to prior observations.
    D) The dependency between an observation and a number of lagged observations.

    Correct Answer: D
659. Which of the following is a key disadvantage of the **k-Nearest Neighbors (KNN)** algorithm?
    A) It is prone to underfitting.
    B) It is highly sensitive to the scale of the features.
    C) It is a parametric model.
    D) It cannot be used for regression.

    Correct Answer: B
660. **Decision Trees** are considered **white-box** models because:
    A) They are computationally efficient.
    B) Their decision-making process is easy to interpret and visualize.
    C) They can handle both numerical and categorical data.
    D) They are less prone to overfitting.

    Correct Answer: C
661. In **Bayesian analysis**, the **Maximum A Posteriori (MAP)** estimate is the hypothesis that:
    A) Maximizes the likelihood function.
    B) Maximizes the posterior probability.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
662. **Naïve Bayes** is often the preferred choice for text classification tasks (e.g., spam filtering) due to its:
    A) High accuracy and low bias.
    B) Simplicity, speed, and efficiency with high-dimensional, sparse data.
    C) Ability to capture complex non-linear relationships.
    D) Robustness to non-stationary data.

    Correct Answer: A
663. **Random Forest** is an example of a **low-bias, low-variance** ensemble method, achieved by:
    A) Training deep, high-variance trees and averaging their predictions.
    B) Training shallow, high-bias trees and averaging their predictions.
    C) Training deep, low-variance trees and averaging their predictions.
    D) Training shallow, low-variance trees and averaging their predictions.

    Correct Answer: B
664. **AdaBoost** (Adaptive Boosting) is a boosting algorithm where the weights of the misclassified samples are:
    A) Increased in the next iteration.
    B) Decreased in the next iteration.
    C) Set to zero in the next iteration.
    D) Kept constant throughout the process.

    Correct Answer: C
665. In **Support Vector Machines (SVM)**, the **slack variables** are introduced in the soft margin formulation to:
    A) Increase the margin width.
    B) Allow for some misclassification of training data.
    C) Reduce the computational complexity.
    D) Perform feature selection.

    Correct Answer: B
666. **XGBoost** is known for its efficient handling of **sparse data** by:
    A) Using a specialized data structure for sparse matrices.
    B) Learning the optimal direction for missing values to go at each split.
    C) Only considering non-zero entries in the feature matrix.
    D) All of the above.

    Correct Answer: C
667. **CatBoost** addresses the issue of **prediction shift** (a form of target leakage) when dealing with categorical features by:
    A) Using a one-hot encoding scheme.
    B) Using a permutation-based approach to calculate target statistics.
    C) Ignoring the categorical features.
    D) Using a deep neural network.

    Correct Answer: C
668. In **Linear Regression**, the assumption of **normality of residuals** means that:
    A) The independent variables are normally distributed.
    B) The dependent variable is normally distributed.
    C) The errors (residuals) are normally distributed.
    D) The model parameters are normally distributed.

    Correct Answer: A
669. **Non-linear Regression** can be achieved by transforming the target variable. For example, using the logarithm of the target variable is a common technique for:
    A) Handling heteroscedasticity.
    B) Linearizing an exponential relationship.
    C) Dealing with categorical features.
    D) Reducing the number of features.

    Correct Answer: A
670. **Boosting** is primarily effective at reducing which component of the model's error?
    A) Bias.
    B) Variance.
    C) Irreducible error.
    D) Training error.

    Correct Answer: B
671. The **Autoregressive (AR)** component in an **ARMA** or **ARIMA** model for **Time-series forecasting** accounts for:
    A) The trend in the data.
    B) The seasonal pattern.
    C) The dependency between an observation and a residual error from a moving average model applied to prior observations.
    D) The dependency between an observation and a number of lagged observations.

    Correct Answer: A
672. In **k-Nearest Neighbors (KNN)**, the decision boundary is:
    A) Always linear.
    B) Always non-linear.
    C) Piecewise linear and can be highly complex.
    D) Defined by the support vectors.

    Correct Answer: C
673. **Decision Trees** are prone to creating **overly complex** models that fit the noise in the data. This is a manifestation of:
    A) High bias.
    B) High variance.
    C) Low bias.
    D) Low variance.

    Correct Answer: B
674. **Bayesian analysis** provides a principled way to incorporate **prior knowledge** into the model, which is particularly useful when:
    A) The dataset is very large.
    B) The dataset is small or the data is sparse.
    C) The model is highly complex.
    D) The problem is purely unsupervised.

    Correct Answer: B
675. The **Naïve Bayes** classifier is a **generative** model, meaning it models:
    A) The joint probability distribution of the features and the class.
    B) The conditional probability of the class given the features.
    C) The marginal probability of the features.
    D) The marginal probability of the class.

    Correct Answer: C
676. **Random Forest** is a highly **stable** algorithm. This stability is primarily due to:
    A) The use of deep individual trees.
    B) The averaging of predictions from multiple independent trees.
    C) The sequential training process.
    D) The use of a complex loss function.

    Correct Answer: A
677. **Gradient Boosting Machines (GBM)** are often the top-performing models in structured data competitions. This is largely due to their ability to:
    A) Handle non-linear relationships and automatically perform feature selection.
    B) Train models in parallel.
    C) Use a simple linear model as the base learner.
    D) Avoid the need for hyperparameter tuning.

    Correct Answer: B
678. In **Support Vector Machines (SVM)**, the choice of the **kernel function** determines:
    A) The regularization strength.
    B) The dimensionality of the feature space the data is implicitly mapped to.
    C) The number of support vectors.
    D) The training time.

    Correct Answer: C
679. **XGBoost** uses a more advanced objective function than standard GBM, which includes:
    A) Only the loss function.
    B) The loss function and a regularization term.
    C) Only the regularization term.
    D) The loss function and the prior probability.

    Correct Answer: C
680. **CatBoost** is known for its ability to achieve high accuracy with minimal hyperparameter tuning. This is a result of its:
    A) Use of a simple linear model.
    B) Built-in handling of categorical features and prediction shift.
    C) Reliance on a very large dataset.
    D) Use of a single, very deep tree.

    Correct Answer: A
681. In **Linear Regression**, the assumption of **no multicollinearity** means that:
    A) The independent variables are not perfectly correlated with each other.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The relationship is linear.

    Correct Answer: B
682. **Non-linear Regression** can be implemented using **Support Vector Regression (SVR)** with a non-linear kernel. The SVR model aims to find a function that:
    A) Maximizes the margin between the data points.
    B) Minimizes the error within a specified margin ($\epsilon$).
    C) Minimizes the sum of squared errors.
    D) Maximizes the likelihood.

    Correct Answer: B
683. **Ensemble Learning** methods that train base models independently and then combine their predictions (e.g., Random Forest) are known as:
    A) Sequential ensembles.
    B) Parallel ensembles (e.g., Bagging).
    C) Boosting ensembles.
    D) Stacking ensembles.

    Correct Answer: A
684. In **Time-series forecasting**, the process of removing the **trend** and **seasonality** from the data is called:
    A) Differencing.
    B) Normalization.
    C) Stationarization.
    D) Decomposition.

    Correct Answer: C
685. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **outliers** because:
    A) Outliers can significantly influence the distance calculation and the majority vote.
    B) Outliers are always assigned to their own cluster.
    C) Outliers are always ignored by the algorithm.
    D) Outliers only affect the training time.

    Correct Answer: B
686. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
687. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: C
688. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: A
689. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
690. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: C
691. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: A
692. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: A
693. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
694. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
695. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
696. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
697. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
698. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
699. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
700. **Decision Trees** are considered **non-parametric** models because:
    A) They do not make any assumptions about the underlying data distribution.
    B) They require a large number of parameters to be tuned.
    C) They can only be used for classification.
    D) They are computationally very fast.

    Correct Answer: B
701. In **Bayesian analysis**, the **Posterior Probability** is the probability of the hypothesis:
    A) Before observing the data.
    B) After observing the data.
    C) Given the data.
    D) Both B and C.

    Correct Answer: C
702. **Naïve Bayes** is a **probabilistic** classifier, meaning it outputs:
    A) Only the class label.
    B) The probability of each class.
    C) The feature importance scores.
    D) The decision boundary.

    Correct Answer: C
703. **Random Forest** is an effective method for handling **non-linear relationships** because:
    A) It uses a linear model as the base learner.
    B) It uses a complex kernel function.
    C) It is an ensemble of non-linear Decision Trees.
    D) It performs a linear transformation of the data.

    Correct Answer: A
704. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
705. In **Support Vector Machines (SVM)**, the **margin** is the distance between the two parallel hyperplanes that:
    A) Pass through the origin.
    B) Separate the data and are defined by the support vectors.
    C) Minimize the training error.
    D) Are always linear.

    Correct Answer: B
706. The **Kernel Trick** in SVM is a powerful concept that allows the model to:
    A) Solve non-linear problems using linear algebra in a high-dimensional space.
    B) Reduce the computational complexity of the model.
    C) Handle time-series data.
    D) Perform feature selection.

    Correct Answer: A
707. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: C
708. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
709. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
710. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: C
711. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
712. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
713. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: C
714. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
715. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: A
716. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
717. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
718. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
719. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: C
720. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
721. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
722. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: C
723. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: A
724. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
725. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: C
726. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: A
727. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
728. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
729. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
730. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
731. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
732. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
733. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
734. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: C
735. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
736. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: C
737. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
738. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: A
739. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
740. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
741. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
742. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
743. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
744. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
745. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: C
746. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
747. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
748. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: C
749. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: C
750. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: A
751. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
752. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
753. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
754. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: C
755. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
756. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
757. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: C
758. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: A
759. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
760. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: C
761. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: A
762. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: A
763. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
764. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
765. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
766. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
767. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
768. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
769. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: C
770. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
771. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: C
772. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
773. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: A
774. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
775. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
776. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: A
777. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: C
778. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
779. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
780. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: C
781. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
782. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
783. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: C
784. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
785. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: A
786. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
787. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
788. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
789. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: C
790. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
791. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
792. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: C
793. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: A
794. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
795. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: C
796. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: A
797. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
798. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
799. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
800. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
801. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
802. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
803. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
804. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: C
805. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
806. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: C
807. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
808. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: A
809. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
810. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
811. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
812. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
813. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
814. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
815. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: C
816. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
817. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
818. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: C
819. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: C
820. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: A
821. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
822. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
823. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
824. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: C
825. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
826. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
827. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: C
828. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: A
829. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
830. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: C
831. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: A
832. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: A
833. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
834. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
835. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
836. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
837. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
838. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
839. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: C
840. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
841. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: C
842. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
843. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: A
844. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
845. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
846. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: A
847. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: C
848. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
849. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
850. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: C
851. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
852. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
853. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: C
854. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
855. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: A
856. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
857. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
858. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
859. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: C
860. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
861. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
862. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: C
863. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: A
864. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
865. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: C
866. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: A
867. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
868. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
869. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
870. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
871. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
872. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
873. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
874. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: C
875. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
876. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: C
877. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
878. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: A
879. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
880. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
881. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
882. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
883. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
884. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
885. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: C
886. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: A
887. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
888. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: C
889. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: C
890. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: A
891. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
892. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
893. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: A
894. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: C
895. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
896. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
897. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: C
898. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: A
899. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
900. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: C
901. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: A
902. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: A
903. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
904. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
905. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
906. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
907. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
908. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: C
909. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
910. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
911. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
912. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
913. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
914. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
915. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
916. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
917. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
918. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
919. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
920. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: C
921. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
922. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
923. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
924. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
925. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
926. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
927. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: C
928. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: C
929. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
930. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
931. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: A
932. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: C
933. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
934. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: C
935. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
936. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
937. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
938. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
939. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
940. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
941. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
942. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
943. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
944. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
945. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: C
946. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
947. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
948. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
949. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
950. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
951. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: A
952. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
953. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
954. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
955. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: A
956. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
957. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
958. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
959. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
960. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
961. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: C
962. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
963. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
964. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: C
965. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
966. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
967. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
968. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
969. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
970. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
971. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
972. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
973. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
974. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
975. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: B
976. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: C
977. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
978. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: B
979. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: B
980. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: B
981. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
982. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: C
983. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
984. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
985. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
986. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.

    Correct Answer: B
987. **XGBoost** is known for its ability to handle **large datasets** efficiently due to its:
    A) Use of a simple linear model.
    B) Optimized data structures and parallel processing capabilities.
    C) Reliance on a single, very deep tree.
    D) Use of a simple loss function.

    Correct Answer: B
988. **CatBoost** uses a technique called **Minimal Variance Sampling (MVS)** to:
    A) Reduce the computational time.
    B) Handle the imbalance in the dataset.
    C) Select the best split point at each node.
    D) Prevent overfitting.

    Correct Answer: B
989. In **Linear Regression**, the assumption of **linearity** means that:
    A) The relationship between the features and the target is a straight line.
    B) The errors are normally distributed.
    C) The variance of the errors is constant.
    D) The independent variables are not correlated.

    Correct Answer: A
990. **Non-linear Regression** can be implemented using **Decision Trees** for regression. The decision tree model aims to:
    A) Find a linear relationship between the features and the target.
    B) Partition the feature space into regions and predict the mean (or median) of the target in each region.
    C) Maximize the margin between the data points.
    D) Minimize the sum of squared errors.

    Correct Answer: B
991. **Stacking** is an **ensemble learning** technique that often achieves better performance than Bagging or Boosting because:
    A) It trains models in parallel.
    B) It trains models sequentially.
    C) It uses a meta-model to learn how to best combine the predictions of the base models.
    D) It uses a simple average of the predictions.

    Correct Answer: B
992. The **Seasonal** component in a time-series decomposition model for **Time-series forecasting** accounts for:
    A) The long-term trend in the data.
    B) The short-term fluctuations.
    C) The regular, repeating patterns that occur at fixed intervals.
    D) The random noise.

    Correct Answer: C
993. The **k-Nearest Neighbors (KNN)** algorithm is sensitive to **irrelevant features** because:
    A) Irrelevant features can dominate the distance calculation.
    B) Irrelevant features are always ignored by the algorithm.
    C) Irrelevant features only affect the training time.
    D) Irrelevant features only affect the regression performance.

    Correct Answer: C
994. **Decision Trees** are considered **greedy** algorithms because:
    A) They always choose the split that maximizes the immediate gain (e.g., Gini or Information Gain) at the current node.
    B) They use a complex loss function.
    C) They require a large amount of data.
    D) They are computationally expensive.

    Correct Answer: C
995. In **Bayesian analysis**, the **Maximum Likelihood Estimate (MLE)** is the hypothesis that:
    A) Maximizes the posterior probability.
    B) Maximizes the likelihood function.
    C) Maximizes the prior probability.
    D) Minimizes the squared error.

    Correct Answer: B
996. **Naïve Bayes** is a **discriminative** model.
    A) True.
    B) False. (It is a generative model).
    C) Only for binary classification.
    D) Only for text classification.

    Correct Answer: B
997. **Random Forest** is an effective method for handling **high-dimensional data** because:
    A) It only uses a random subset of features for each split.
    B) It uses a complex kernel function.
    C) It performs a non-linear transformation of the data.
    D) It is a linear model.

    Correct Answer: B
998. **Gradient Boosting Machines (GBM)** are often used in scenarios where:
    A) The model needs to be highly interpretable.
    B) The dataset is very small.
    C) High predictive accuracy is the primary goal.
    D) The training time must be minimal.

    Correct Answer: B
999. In **Support Vector Machines (SVM)**, the **hyperplane** is the decision boundary that:
    A) Passes through the origin.
    B) Maximizes the margin between the classes.
    C) Minimizes the training error.
    D) Is always linear.

    Correct Answer: B
1000. The **Polynomial Kernel** in SVM is a non-linear kernel that allows the model to:
    A) Fit a linear decision boundary.
    B) Fit a polynomial decision boundary.
    C) Reduce the dimensionality of the feature space.
    D) Handle categorical features.


*   Neural Network Architecture: Perceptron, Feedforward Networks, Activation Functions (ReLU, Sigmoid, Tanh), Loss Functions (MSE, Cross-Entropy), Backpropagation, Optimization (SGD, Adam, RMSprop)
*   Convolutional Neural Networks (CNNs): Convolutional Layer, Pooling Layer, Fully Connected Layer, Applications (Image Classification, Object Detection)
*   Recurrent Neural Networks (RNNs): LSTM, GRU, Applications (NLP, Time Series)
*   Advanced Architectures: Transformers, Attention Mechanisms, Generative Adversarial Networks (GANs), Autoencoders


    Correct Answer: B
1001. The fundamental building block of a neural network is the **Perceptron**. What is the primary function of the activation function within a perceptron?
    A) To normalize the input features.
    B) To introduce non-linearity to the model.
    C) To calculate the weighted sum of the inputs.
    D) To regularize the weights and prevent overfitting.

    Correct Answer: A
1002. In a standard **Feedforward Neural Network (FNN)**, information flows:
    A) Bidirectionally between all layers.
    B) From the output layer back to the input layer.
    C) Only from the input layer through the hidden layers to the output layer.
    D) Only within the hidden layers.

    Correct Answer: B
1003. Which of the following is a key advantage of the **Rectified Linear Unit (ReLU)** activation function over the Sigmoid function?
    A) It is computationally more expensive.
    B) It is less prone to the vanishing gradient problem.
    C) It produces outputs between 0 and 1, suitable for probability.
    D) It is a smooth, differentiable function everywhere.

    Correct Answer: B
1004. The **Sigmoid** activation function is often used in the output layer of a neural network for which type of problem?
    A) Multi-class classification.
    B) Binary classification.
    C) Regression.
    D) Clustering.

    Correct Answer: B
1005. The **Mean Squared Error (MSE)** loss function is most commonly used for which type of machine learning task?
    A) Binary classification.
    B) Multi-class classification.
    C) Regression.
    D) Unsupervised learning.

    Correct Answer: B
1006. The **Cross-Entropy Loss** (or Log Loss) is the standard loss function for classification problems. Why is it preferred over MSE for classification?
    A) It is computationally faster to calculate.
    B) It penalizes confident, incorrect predictions more heavily, leading to faster convergence.
    C) It is a convex function, guaranteeing a global minimum.
    D) It is less sensitive to outliers.

    Correct Answer: C
1007. **Backpropagation** is the algorithm used to train neural networks. Its core mechanism involves the application of which mathematical rule?
    A) The product rule.
    B) The chain rule of calculus.
    C) The quotient rule.
    D) The power rule.

    Correct Answer: B
1008. The **Vanishing Gradient Problem** primarily occurs in deep networks using activation functions like Sigmoid or Tanh. What is the consequence of this problem?
    A) The network's weights become too large, leading to overflow.
    B) The gradients become extremely small, preventing the weights in the initial layers from being updated effectively.
    C) The network gets stuck in a local minimum.
    D) The learning rate becomes too high, causing oscillations.

    Correct Answer: B
1009. **Stochastic Gradient Descent (SGD)** is an optimization algorithm. The "Stochastic" part refers to the fact that the gradient is calculated using:
    A) The entire training dataset.
    B) A single randomly selected data point (or a small mini-batch).
    C) Only the misclassified data points.
    D) A weighted average of all data points.

    Correct Answer: B
1010. The **Adam** optimization algorithm combines the benefits of two other extensions of SGD. Which two?
    A) Momentum and Nesterov Accelerated Gradient.
    B) Adagrad and RMSprop.
    C) Adagrad and Momentum.
    D) RMSprop and Nesterov Accelerated Gradient.

    Correct Answer: B
1011. In a **Convolutional Neural Network (CNN)**, the primary purpose of the **Convolutional Layer** is to:
    A) Reduce the dimensionality of the input image.
    B) Extract local features from the input data using learnable filters (kernels).
    C) Introduce non-linearity to the model.
    D) Flatten the feature maps into a vector.

    Correct Answer: B
1012. The **Pooling Layer** in a CNN serves what main function?
    A) To increase the spatial resolution of the feature maps.
    B) To reduce the spatial size of the representation, which reduces the number of parameters and computation, and helps control overfitting.
    C) To apply an activation function to the feature maps.
    D) To combine feature maps from different channels.

    Correct Answer: B
1013. The output of the final **Fully Connected Layer** in a CNN for a classification task is typically passed through which function to produce class probabilities?
    A) ReLU.
    B) Tanh.
    C) Sigmoid (for binary) or Softmax (for multi-class).
    D) Linear activation.

    Correct Answer: B
1014. Which of the following is a common application of **Convolutional Neural Networks (CNNs)**?
    A) Natural Language Processing (NLP) for text generation.
    B) Time-series forecasting.
    C) Image classification and object detection.
    D) Unsupervised clustering.

    Correct Answer: B
1015. **Recurrent Neural Networks (RNNs)** are primarily designed to handle which type of data?
    A) High-dimensional, static data (e.g., tabular data).
    B) Sequential data, where the output depends on previous elements in the sequence.
    C) Image data with high spatial resolution.
    D) Data with a fixed, small number of features.

    Correct Answer: B
1016. The **Long Short-Term Memory (LSTM)** network is a type of RNN that addresses the vanishing gradient problem. It achieves this through the use of specialized structures called:
    A) Nodes.
    B) Gates (Forget, Input, Output).
    C) Kernels.
    D) Attention mechanisms.

    Correct Answer: B
1017. The **Gated Recurrent Unit (GRU)** is a simplified version of the LSTM. How does it primarily differ from the standard LSTM architecture?
    A) It uses a different activation function.
    B) It combines the forget and input gates into a single update gate and merges the cell state and hidden state.
    C) It does not use a recurrent connection.
    D) It only has an output gate.

    Correct Answer: B
1018. A key application of **Recurrent Neural Networks (RNNs)** is in **Natural Language Processing (NLP)**, specifically for tasks like:
    A) Image segmentation.
    B) Machine translation and text generation.
    C) Dimensionality reduction.
    D) Association rule mining.

    Correct Answer: B
1019. The **Transformer** architecture, which revolutionized NLP, completely replaced the recurrent and convolutional layers with which mechanism?
    A) Gated Recurrent Units (GRUs).
    B) Long Short-Term Memory (LSTM).
    C) Attention mechanisms (specifically, Multi-Head Self-Attention).
    D) Max Pooling.

    Correct Answer: D
1020. In the **Transformer** model, **Positional Encoding** is added to the input embeddings. What is the purpose of this?
    A) To reduce the dimensionality of the embeddings.
    B) To inject information about the relative or absolute position of the tokens in the sequence.
    C) To normalize the embeddings.
    D) To act as a non-linear activation function.

    Correct Answer: C
1021. **Generative Adversarial Networks (GANs)** consist of two competing neural networks. What are these two networks called?
    A) Encoder and Decoder.
    B) Producer and Consumer.
    C) Generator and Discriminator.
    D) Input and Output.

    Correct Answer: B
1022. In a GAN, the **Discriminator** network is trained to:
    A) Generate realistic data samples.
    B) Distinguish between real data samples and fake samples generated by the Generator.
    C) Encode the input data into a latent space.
    D) Reconstruct the input data from a compressed representation.

    Correct Answer: B
1023. **Autoencoders** are unsupervised neural networks primarily used for:
    A) Classification.
    B) Regression.
    C) Dimensionality reduction and feature learning.
    D) Time-series forecasting.

    Correct Answer: B
1024. An Autoencoder consists of two main parts: the **Encoder** and the **Decoder**. The bottleneck layer between them is also known as the:
    A) Input layer.
    B) Output layer.
    C) Latent space or code.
    D) Convolutional layer.

    Correct Answer: B
1025. The **Hyperbolic Tangent (Tanh)** activation function is similar to the Sigmoid function but has a range of:
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1026. When training a deep neural network, which technique is commonly used to prevent overfitting by randomly setting a fraction of the neurons to zero during the forward pass?
    A) Batch Normalization.
    B) Dropout.
    C) Weight Decay (L2 Regularization).
    D) Early Stopping.

    Correct Answer: A
1027. **Batch Normalization** is a technique that normalizes the activations of the previous layer at each mini-batch. What is its primary benefit?
    A) It allows for the use of much higher learning rates and makes the network less sensitive to the initial weights.
    B) It completely eliminates the need for an activation function.
    C) It replaces the need for a loss function.
    D) It reduces the number of parameters in the network.

    Correct Answer: B
1028. The **Softmax** function is typically applied to the output layer of a neural network for which type of problem?
    A) Binary classification.
    B) Multi-class classification.
    C) Regression.
    D) Time-series forecasting.

    Correct Answer: B
1029. In the context of optimization, the **Learning Rate** hyperparameter controls:
    A) The number of epochs the model is trained for.
    B) The size of the mini-batch.
    C) The step size at each iteration while moving toward a minimum of the loss function.
    D) The number of layers in the network.

    Correct Answer: B
1030. The **RMSprop** optimization algorithm is an extension of Adagrad that attempts to resolve its diminishing learning rate problem by:
    A) Using a momentum term.
    B) Dividing the learning rate by an exponentially decaying average of squared gradients.
    C) Using a fixed learning rate.
    D) Applying L2 regularization.

    Correct Answer: A
1031. In a **Convolutional Layer**, the **stride** parameter determines:
    A) The size of the filter (kernel).
    B) The amount of zero-padding applied to the input.
    C) The step size the filter takes as it slides across the input image.
    D) The number of output channels.

    Correct Answer: B
1032. **Zero-padding** is often used in CNNs to:
    A) Reduce the size of the output feature map.
    B) Ensure that the spatial size of the output feature map is the same as the input.
    C) Increase the number of parameters.
    D) Introduce non-linearity.

    Correct Answer: B
1033. The **Max Pooling** operation selects the maximum value within the pooling window. What is the main reason for using Max Pooling?
    A) To increase the computational complexity.
    B) To achieve translation invariance and reduce the feature map size.
    C) To introduce non-linearity.
    D) To increase the number of channels.

    Correct Answer: A
1034. **Transfer Learning** in CNNs often involves:
    A) Training a new model from scratch on a very large dataset.
    B) Using a pre-trained model (e.g., VGG, ResNet) as a feature extractor and only retraining the final classification layers.
    C) Using a simple linear model instead of a deep network.
    D) Converting the CNN into a Recurrent Neural Network.

    Correct Answer: A
1035. The primary challenge that **Recurrent Neural Networks (RNNs)** face in training is:
    A) The vanishing and exploding gradient problems.
    B) The need for a very large number of parameters.
    C) The inability to handle sequential data.
    D) The high computational cost of the forward pass.

    Correct Answer: C
1036. The **Cell State** in an **LSTM** network is responsible for:
    A) Determining the output of the LSTM unit.
    B) Storing long-term dependencies and information that can be carried across the sequence.
    C) Calculating the gradient for backpropagation.
    D) Introducing non-linearity.

    Correct Answer: B
1037. In the context of NLP, a **Sequence-to-Sequence (Seq2Seq)** model, often built with RNNs or Transformers, is typically used for tasks like:
    A) Image recognition.
    B) Machine translation and summarization.
    C) Unsupervised clustering.
    D) Anomaly detection.

    Correct Answer: B
1038. The **Attention Mechanism** in the Transformer architecture allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Assign different levels of importance to different parts of the input sequence when processing a specific part of the output sequence.
    C) Reduce the number of parameters.
    D) Replace the need for an activation function.

    Correct Answer: C
1039. In a **Generative Adversarial Network (GAN)**, the **Generator** network is trained to:
    A) Distinguish between real and fake samples.
    B) Produce data samples that are indistinguishable from the real data.
    C) Calculate the loss function.
    D) Perform classification.

    Correct Answer: C
1040. The training of a GAN is often described as a **minimax game**. What is the objective function that the Generator tries to minimize and the Discriminator tries to maximize?
    A) Mean Squared Error.
    B) Cross-Entropy Loss.
    C) The value function $V(D, G)$.
    D) The L1 norm.

    Correct Answer: B
1041. A **Denoising Autoencoder** is a variant of the standard Autoencoder that is trained to:
    A) Encode the input into a higher-dimensional space.
    B) Reconstruct the original, clean input from a corrupted (noisy) version of the input.
    C) Perform classification.
    D) Generate new data samples.

    Correct Answer: B
1042. The **Perceptron** is limited to solving only which type of classification problems?
    A) Non-linear separable problems.
    B) Linearly separable problems.
    C) Multi-class classification problems.
    D) Regression problems.

    Correct Answer: D
1043. The process of calculating the error at the output layer and distributing it backward through the network to update the weights is called:
    A) Forward Propagation.
    B) Backpropagation.
    C) Gradient Descent.
    D) Convolution.

    Correct Answer: A
1044. Which activation function is defined as $f(x) = \max(0, x)$?
    A) Sigmoid.
    B) Tanh.
    C) ReLU.
    D) Softmax.

    Correct Answer: B
1045. The **Softmax** function converts a vector of arbitrary real numbers into a probability distribution. The sum of the output values is always:
    A) 0.
    B) 1.
    C) Between -1 and 1.
    D) Equal to the number of classes.

    Correct Answer: B
1046. **Weight Initialization** is a critical step in training deep networks. Poor initialization can lead to:
    A) The vanishing or exploding gradient problem.
    B) Overfitting.
    C) Underfitting.
    D) High computational cost.

    Correct Answer: C
1047. The **Momentum** term in optimization algorithms helps to:
    A) Reduce the learning rate.
    B) Accelerate convergence in the relevant direction and dampen oscillations.
    C) Increase the size of the mini-batch.
    D) Regularize the weights.

    Correct Answer: C
1048. **Adaptive Gradient (Adagrad)** is an optimization algorithm that adapts the learning rate for each parameter based on:
    A) The average of all past gradients.
    B) The square root of the sum of the squares of all its past gradients.
    C) A fixed, global learning rate.
    D) The current loss value.

    Correct Answer: A
1049. In a **Convolutional Layer**, the **receptive field** of a neuron in a subsequent layer refers to:
    A) The entire input image.
    B) The region in the input image that influences the output of that neuron.
    C) The size of the filter (kernel).
    D) The number of channels.

    Correct Answer: A
1050. **Dilation** in a **Dilated Convolution** (or Atrous Convolution) is used to:
    A) Reduce the number of parameters.
    B) Increase the receptive field of the filter without increasing the number of parameters or the computational cost.
    C) Reduce the spatial size of the feature map.
    D) Introduce non-linearity.

    Correct Answer: B
1051. The **1x1 Convolution** (or Network in Network) is often used in CNN architectures like GoogLeNet and ResNet for what purpose?
    A) To reduce the number of channels (dimensionality reduction) and introduce non-linearity.
    B) To increase the spatial resolution.
    C) To replace the pooling layer.
    D) To perform a Max Pooling operation.

    Correct Answer: B
1052. **Object Detection** is a computer vision task that involves both classification and localization. Which type of neural network is primarily used for this task?
    A) Feedforward Networks.
    B) Convolutional Neural Networks (CNNs).
    C) Recurrent Neural Networks (RNNs).
    D) Autoencoders.

    Correct Answer: B
1053. The **Exploding Gradient Problem** in RNNs is typically addressed by which technique?
    A) Using the Sigmoid activation function.
    B) Gradient Clipping.
    C) Increasing the learning rate.
    D) Using a larger batch size.

    Correct Answer: B
1054. The **Forget Gate** in an **LSTM** network controls:
    A) Which information from the previous hidden state is passed to the current hidden state.
    B) Which information from the cell state should be thrown away.
    C) Which new information is stored in the cell state.
    D) Which information from the cell state is exposed as the output.

    Correct Answer: A
1055. **Bidirectional RNNs (Bi-RNNs)** are used when:
    A) The sequence is very long.
    B) The output at a given time step depends on both the past and future elements of the sequence.
    C) The input is an image.
    D) The model is used for regression.

    Correct Answer: C
1056. In the **Transformer** architecture, the **Multi-Head Attention** mechanism is used to:
    A) Allow the model to jointly attend to information from different representation subspaces at different positions.
    B) Reduce the computational complexity.
    C) Replace the need for Positional Encoding.
    D) Ensure the model is strictly sequential.

    Correct Answer: B
1057. **BERT** (Bidirectional Encoder Representations from Transformers) is a famous pre-trained model that uses the **Transformer's Encoder** stack. What is a key characteristic of BERT's training approach?
    A) It is trained only on image data.
    B) It is trained to be deeply bidirectional, conditioning on both left and right context in all layers.
    C) It is trained only for text generation.
    D) It uses a simple RNN architecture.

    Correct Answer: B
1058. The primary goal of training a **Generative Adversarial Network (GAN)** is to reach a **Nash Equilibrium**, where:
    A) The Generator perfectly reproduces the training data.
    B) The Discriminator can no longer distinguish between real and fake samples (i.e., its accuracy is 50%).
    C) The Generator's loss is zero.
    D) The Discriminator's loss is zero.

    Correct Answer: B
1059. **Variational Autoencoders (VAEs)** are a type of generative model that differ from standard Autoencoders by:
    A) Using a different loss function.
    B) Learning a probability distribution for the latent space, allowing for controlled generation of new data.
    C) Only using a single hidden layer.
    D) Not using an activation function.

    Correct Answer: B
1060. **Transfer Learning** is a common practice in Deep Learning because:
    A) Training deep models from scratch is always faster.
    B) Pre-trained models have already learned general features from massive datasets, which can be fine-tuned for a new, smaller task.
    C) It eliminates the need for a loss function.
    D) It is only applicable to NLP tasks.

    Correct Answer: B
1061. A **Deep Neural Network (DNN)** is defined as a neural network with:
    A) More than 100 neurons.
    B) More than one hidden layer.
    C) Only a single output neuron.
    D) Only a single input neuron.

    Correct Answer: B
1062. The **Bias Term** in a neural network layer serves what purpose?
    A) It controls the learning rate.
    B) It shifts the activation function, allowing the model to represent patterns that do not pass through the origin.
    C) It introduces non-linearity.
    D) It normalizes the input.

    Correct Answer: B
1063. The **Leaky ReLU** activation function was introduced to address which problem of the standard ReLU?
    A) The vanishing gradient problem.
    B) The exploding gradient problem.
    C) The "dying ReLU" problem, where neurons can become permanently inactive.
    D) The need for a smooth, differentiable function.

    Correct Answer: C
1064. In a multi-class classification problem, the **Cross-Entropy Loss** is calculated by:
    A) Summing the squared differences between predicted and true probabilities.
    B) Summing the negative logarithm of the predicted probability for the true class.
    C) Calculating the L1 norm of the weight vector.
    D) Calculating the mean of the absolute errors.

    Correct Answer: B
1065. **Weight Decay** (L2 Regularization) is a technique used to prevent overfitting by:
    A) Randomly dropping out neurons.
    B) Adding a penalty term to the loss function proportional to the square of the weights.
    C) Stopping the training early.
    D) Normalizing the input data.

    Correct Answer: D
1066. The **Nesterov Accelerated Gradient (NAG)** optimization algorithm improves upon standard Momentum by:
    A) Calculating the gradient at the current position.
    B) Calculating the gradient at a position slightly ahead in the direction of the momentum.
    C) Using a fixed learning rate.
    D) Adapting the learning rate for each parameter.

    Correct Answer: B
1067. The **Adadelta** optimization algorithm is an extension of Adagrad that eliminates the need to manually set which hyperparameter?
    A) The batch size.
    B) The number of epochs.
    C) The learning rate.
    D) The number of layers.

    Correct Answer: B
1068. In a **Convolutional Layer**, the **number of filters (kernels)** determines:
    A) The spatial size of the output feature map.
    B) The depth (number of channels) of the output feature map.
    C) The size of the receptive field.
    D) The amount of zero-padding.

    Correct Answer: A
1069. **Feature Maps** (or Activation Maps) are the output of a Convolutional Layer. What do they represent?
    A) The raw pixel values of the input image.
    B) The result of applying a specific filter (kernel) across the entire input, highlighting where that feature is present.
    C) The class probabilities.
    D) The weights of the network.

    Correct Answer: B
1070. **Semantic Segmentation** is a computer vision task where:
    A) A bounding box is drawn around objects.
    B) Every pixel in the image is classified into a specific class.
    C) The entire image is classified into a single class.
    D) The depth of the image is estimated.

    Correct Answer: B
1071. **Residual Networks (ResNets)** introduced the concept of **skip connections** (or identity mappings). What is the primary benefit of these connections?
    A) They reduce the number of parameters.
    B) They allow the gradient to flow directly through the network, mitigating the vanishing gradient problem in very deep networks.
    C) They replace the need for activation functions.
    D) They increase the computational complexity.

    Correct Answer: B
1072. The **Attention Mechanism** in RNNs was originally introduced to address the problem of:
    A) The vanishing gradient problem.
    B) The fixed-size context vector bottleneck in Seq2Seq models for long sequences.
    C) The exploding gradient problem.
    D) The need for a large training dataset.

    Correct Answer: B
1073. **GPT** (Generative Pre-trained Transformer) models are based on which part of the Transformer architecture?
    A) The Encoder stack.
    B) The Decoder stack (with masked self-attention).
    C) Both the Encoder and Decoder.
    D) Neither, they use a simple RNN.

    Correct Answer: B
1074. The primary goal of the **Discriminator** in a GAN is to output a probability that the input sample is:
    A) Generated by the Generator.
    B) Real (from the training data).
    C) Classified correctly.
    D) Encoded correctly.

    Correct Answer: B
1075. **Conditional GANs (CGANs)** extend the basic GAN framework by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., a class label or image).
    C) Using a different loss function.
    D) Only using a single hidden layer.

    Correct Answer: B
1076. In a standard **Autoencoder**, the dimension of the **latent space** (code) is typically:
    A) Equal to the input dimension.
    B) Greater than the input dimension.
    C) Smaller than the input dimension.
    D) Always 100.

    Correct Answer: B
1077. **Sparse Autoencoders** are a type of Autoencoder that enforce a constraint on the activations of the hidden units, encouraging them to be:
    A) Always positive.
    B) Mostly zero (sparse).
    C) Always negative.
    D) Always one.

    Correct Answer: B
1078. Which of the following is a key characteristic of a **Perceptron**?
    A) It uses a continuous activation function.
    B) It can only learn linear decision boundaries.
    C) It is trained using backpropagation.
    D) It has multiple hidden layers.

    Correct Answer: B
1079. The term **Epoch** in neural network training refers to:
    A) The number of training examples processed before the model is updated.
    B) A single forward and backward pass of all the training examples.
    C) The number of layers in the network.
    D) The step size of the optimization algorithm.

    Correct Answer: A
1080. The **Dying ReLU** problem occurs when:
    A) The learning rate is too small.
    B) A large number of ReLU neurons output zero for all inputs and never recover.
    C) The network is too shallow.
    D) The batch size is too large.

    Correct Answer: A
1081. **Binary Cross-Entropy Loss** is used for:
    A) Multi-class classification.
    B) Regression.
    C) Binary classification.
    D) Unsupervised learning.

    Correct Answer: C
1082. **L1 Regularization** (Lasso) in neural networks encourages the weights to become:
    A) Small, but non-zero.
    B) Exactly zero (sparse).
    C) Large and positive.
    D) Large and negative.

    Correct Answer: B
1083. The **Adam** optimization algorithm is generally preferred over standard SGD because:
    A) It is simpler to implement.
    B) It adapts the learning rate for each parameter and includes momentum, leading to faster and more stable convergence.
    C) It requires less memory.
    D) It guarantees a global minimum.

    Correct Answer: A
1084. The **Mini-Batch Gradient Descent** approach is a compromise between SGD and Batch Gradient Descent. What is its main advantage?
    A) It is computationally faster than SGD.
    B) It offers a good balance between the computational efficiency of Batch GD and the faster convergence of SGD.
    C) It guarantees a global minimum.
    D) It eliminates the need for an activation function.

    Correct Answer: A
1085. In a **Convolutional Layer**, the **padding** parameter determines:
    A) The size of the filter (kernel).
    B) The amount of zero-padding applied to the input.
    C) The step size the filter takes.
    D) The number of output channels.

    Correct Answer: C
1086. **Depthwise Separable Convolution** is a technique used to:
    A) Increase the number of parameters.
    B) Significantly reduce the number of parameters and computation in CNNs while maintaining performance.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1087. **Region-based Convolutional Neural Networks (R-CNNs)** and their variants (Fast R-CNN, Faster R-CNN) are primarily used for:
    A) Image classification.
    B) Object detection.
    C) Image generation.
    D) Text summarization.

    Correct Answer: B
1088. The **Exploding Gradient Problem** is characterized by:
    A) Gradients becoming extremely small.
    B) Gradients growing exponentially, leading to very large weight updates and unstable training.
    C) The network getting stuck in a local minimum.
    D) The learning rate becoming too small.

    Correct Answer: B
1089. The **Input Gate** in an **LSTM** network controls:
    A) Which information from the previous hidden state is passed to the current hidden state.
    B) Which information from the cell state should be thrown away.
    C) Which new information is stored in the cell state.
    D) Which information from the cell state is exposed as the output.

    Correct Answer: B
1090. **Encoder-Decoder** architectures, often used in Seq2Seq models, are characterized by:
    A) A single network that processes the entire sequence at once.
    B) An Encoder that maps the input sequence to a context vector, and a Decoder that generates the output sequence from that context vector.
    C) Two competing networks.
    D) A network with only a single hidden layer.

    Correct Answer: A
1091. The **Self-Attention** mechanism in the Transformer computes the output sequence by:
    A) Only looking at the previous elements in the sequence.
    B) Relating different positions of a single sequence to compute a representation of the sequence.
    C) Only looking at the current element.
    D) Using a fixed-size context vector.

    Correct Answer: B
1092. **GPT-3** (Generative Pre-trained Transformer 3) is a large language model that is primarily used for:
    A) Image classification.
    B) Text generation and a wide range of NLP tasks via few-shot learning.
    C) Object detection.
    D) Time-series forecasting.

    Correct Answer: B
1093. The primary application of **Generative Adversarial Networks (GANs)** is:
    A) Classification.
    B) Generating realistic synthetic data (e.g., images, text, audio).
    C) Regression.
    D) Dimensionality reduction.

    Correct Answer: B
1094. **CycleGAN** is a variant of GAN that is used for:
    A) Generating images from text.
    B) Unpaired image-to-image translation (e.g., converting a photo to a painting style).
    C) Object detection.
    D) Time-series forecasting.

    Correct Answer: A
1095. The primary function of the **Decoder** in a standard **Autoencoder** is to:
    A) Compress the input data.
    B) Reconstruct the input data from the latent space representation.
    C) Classify the input data.
    D) Generate new data samples.

    Correct Answer: C
1096. **Undercomplete Autoencoders** are trained with a latent space dimension that is:
    A) Larger than the input dimension.
    B) Smaller than the input dimension.
    C) Equal to the input dimension.
    D) Always 100.

    Correct Answer: B
1097. The **XOR problem** is a classic example that a single-layer **Perceptron** cannot solve because:
    A) It is a non-linear separable problem.
    B) It is a linear separable problem.
    C) It requires a continuous activation function.
    D) It requires a large number of training examples.

    Correct Answer: A
1098. The **Batch Size** hyperparameter in neural network training refers to:
    A) The number of layers in the network.
    B) The number of training examples utilized in one iteration.
    C) The total number of training examples.
    D) The number of epochs.

    Correct Answer: C
1099. The **Parametric ReLU (PReLU)** activation function addresses the dying ReLU problem by:
    A) Setting the slope for the negative part to a small, fixed value.
    B) Allowing the slope for the negative part to be a learnable parameter.
    C) Setting the slope for the negative part to zero.
    D) Using a different loss function.

    Correct Answer: B
1100. **Focal Loss** is a specialized loss function primarily designed to address the problem of:
    A) Vanishing gradients.
    B) Class imbalance in object detection tasks.
    C) Exploding gradients.
    D) Overfitting.

    Correct Answer: A
1101. **Early Stopping** is a form of regularization that works by:
    A) Adding a penalty term to the loss function.
    B) Randomly dropping out neurons.
    C) Stopping the training process when the performance on a validation set starts to degrade.
    D) Normalizing the input data.

    Correct Answer: B
1102. **Adaptive Moment Estimation (Adam)** is an optimization algorithm that calculates:
    A) Only the first moment (mean) of the gradients.
    B) Only the second moment (uncentered variance) of the gradients.
    C) Both the first and second moments of the gradients.
    D) Only the current gradient.

    Correct Answer: D
1103. **Cyclical Learning Rates** is a technique that:
    A) Keeps the learning rate constant throughout training.
    B) Linearly decreases the learning rate.
    C) Periodically varies the learning rate between a minimum and maximum boundary.
    D) Only increases the learning rate.

    Correct Answer: A
1104. In a **Convolutional Layer**, the **bias term** is typically added:
    A) Before the convolution operation.
    B) After the convolution operation and before the activation function.
    C) After the activation function.
    D) Only to the first layer.

    Correct Answer: B
1105. **Inception Modules** (or GoogLeNet) introduced the idea of:
    A) Using only a single convolutional layer.
    B) Performing multiple parallel convolutions with different filter sizes and concatenating their results.
    C) Replacing all convolutional layers with fully connected layers.
    D) Using only Max Pooling.

    Correct Answer: B
1106. **Residual Blocks** in ResNet are designed to learn:
    A) The identity function.
    B) The residual mapping $F(x) = H(x) - x$, where $H(x)$ is the desired underlying mapping.
    C) The inverse of the input.
    D) A linear transformation.

    Correct Answer: A
1107. **Image Captioning** is a task that requires the combination of which two main types of neural networks?
    A) GANs and Autoencoders.
    B) CNNs (for image feature extraction) and RNNs/Transformers (for sequence generation).
    C) Perceptrons and Feedforward Networks.
    D) Only Fully Connected Networks.

    Correct Answer: A
1108. The **Teacher Forcing** technique is often used during the training of RNN-based sequence models to:
    A) Prevent overfitting.
    B) Feed the actual output from the previous time step as input to the current time step, instead of the predicted output.
    C) Increase the computational complexity.
    D) Reduce the number of parameters.

    Correct Answer: B
1109. **Beam Search** is a decoding strategy often used with Seq2Seq models to:
    A) Find the single most likely output sequence.
    B) Find a high-probability output sequence by keeping track of the $k$ most promising partial hypotheses at each time step.
    C) Reduce the training time.
    D) Increase the number of layers.

    Correct Answer: B
1110. The **Transformer's Encoder** is primarily responsible for:
    A) Generating the output sequence.
    B) Mapping the input sequence of symbols to a sequence of continuous representations.
    C) Calculating the loss function.
    D) Performing classification.

    Correct Answer: A
1111. **BERT** is pre-trained using two unsupervised tasks. One is **Masked Language Modeling (MLM)**. What is the other?
    A) Next Sentence Prediction (NSP).
    B) Image Captioning.
    C) Machine Translation.
    D) Time-series forecasting.

    Correct Answer: B
1112. The primary application of **Deep Convolutional GANs (DCGANs)** is:
    A) Text generation.
    B) Generating high-quality images.
    C) Time-series forecasting.
    D) Object detection.

    Correct Answer: C
1113. **WGANs** (Wasserstein GANs) were introduced to address which common problem in standard GAN training?
    A) The vanishing gradient problem of the Discriminator (now called Critic).
    B) The exploding gradient problem.
    C) The need for a large dataset.
    D) The high computational cost.

    Correct Answer: B
1114. **Sparse Autoencoders** achieve sparsity by adding a penalty term to the loss function that measures the difference between the average activation of a hidden unit and a desired sparsity parameter ($\rho$). This penalty is often based on:
    A) Mean Squared Error.
    B) Kullback-Leibler (KL) Divergence.
    C) L1 Regularization.
    D) L2 Regularization.

    Correct Answer: A
1115. **Contractive Autoencoders** are trained to:
    A) Reconstruct the input from the latent space.
    B) Be robust to small variations in the input data by penalizing large derivatives of the hidden layer activations with respect to the input.
    C) Generate new data samples.
    D) Perform classification.

    Correct Answer: B
1116. The **Universal Approximation Theorem** states that a feedforward network with a single hidden layer containing a finite number of neurons can approximate any continuous function, provided:
    A) The activation function is linear.
    B) The activation function is non-linear and squashing (e.g., Sigmoid, Tanh).
    C) The network is trained with SGD.
    D) The network has no bias term.

    Correct Answer: B
1117. The term **Underfitting** in neural networks refers to a model that:
    A) Performs well on the training data but poorly on unseen data.
    B) Performs poorly on both the training data and unseen data.
    C) Has too many parameters.
    D) Is trained for too many epochs.

    Correct Answer: A
1118. The **Exponential Linear Unit (ELU)** activation function is an alternative to ReLU that:
    A) Is always zero for negative inputs.
    B) Has a non-zero output for negative inputs, which helps to mitigate the dying ReLU problem.
    C) Has a range of $[0, 1]$.
    D) Is computationally simpler than ReLU.

    Correct Answer: B
1119. **Weighted Cross-Entropy Loss** is often used when dealing with:
    A) Regression problems.
    B) Balanced datasets.
    C) Class imbalance problems.
    D) Time-series data.

    Correct Answer: D
1120. **Dropout** is a regularization technique that can be interpreted as:
    A) Training a single, very large network.
    B) Training an ensemble of many different subnetworks.
    C) Using a fixed learning rate.
    D) Normalizing the input data.

    Correct Answer: B
1121. **Learning Rate Scheduling** (or decay) is a technique used to:
    A) Keep the learning rate constant throughout training.
    B) Gradually reduce the learning rate as training progresses, which helps the model converge to a better minimum.
    C) Increase the learning rate.
    D) Eliminate the need for an optimizer.

    Correct Answer: B
1122. **AdamW** is a variant of the Adam optimizer that decouples the **weight decay** from the adaptive learning rate update. This is primarily done to:
    A) Reduce the computational cost.
    B) Improve generalization performance, especially in models with L2 regularization.
    C) Eliminate the need for a loss function.
    D) Handle categorical features.

    Correct Answer: B
1123. **Group Normalization** is an alternative to Batch Normalization that is particularly useful when:
    A) The batch size is very large.
    B) The batch size is very small (e.g., in object detection or segmentation tasks).
    C) The network is very shallow.
    D) The input is a sequence.

    Correct Answer: A
1124. **Dilated Convolution** is particularly useful in tasks like **Semantic Segmentation** because it allows the model to:
    A) Reduce the number of parameters.
    B) Capture a wider context without losing spatial resolution or increasing the number of parameters.
    C) Increase the spatial resolution.
    D) Replace the pooling layer.

    Correct Answer: A
1125. **U-Net** is a CNN architecture primarily designed for:
    A) Image classification.
    B) Semantic segmentation (especially in medical imaging).
    C) Object detection.
    D) Text generation.

    Correct Answer: B
1126. **Region Proposal Networks (RPNs)** are a key component of the Faster R-CNN object detection framework. Their function is to:
    A) Classify the proposed regions.
    B) Predict object bounding boxes and objectness scores (whether a box contains an object).
    C) Perform Max Pooling.
    D) Generate synthetic images.

    Correct Answer: B
1127. The **Bidirectional Encoder** in a Bi-RNN or Transformer is responsible for:
    A) Only processing the sequence from left to right.
    B) Processing the sequence from both left-to-right and right-to-left to capture context from both directions.
    C) Only generating the output sequence.
    D) Calculating the loss function.

    Correct Answer: A
1128. The **Attention Score** in the Attention Mechanism is typically calculated using which three vectors?
    A) Input, Output, and Hidden.
    B) Query, Key, and Value.
    C) Weights, Biases, and Gradients.
    D) Encoder, Decoder, and Context.

    Correct Answer: B
1129. **Transfer Learning** in NLP often involves using pre-trained models like BERT or GPT. This is an example of which type of learning?
    A) Unsupervised learning.
    B) Semi-supervised learning (pre-training is unsupervised, fine-tuning is supervised).
    C) Reinforcement learning.
    D) Only supervised learning.

    Correct Answer: C
1130. **Style Transfer** is a generative task that uses deep learning to:
    A) Generate a new image from text.
    B) Re-render the content of one image in the artistic style of another image.
    C) Perform object detection.
    D) Time-series forecasting.

    Correct Answer: A
1131. **PixelRNN** and **PixelCNN** are generative models that generate images:
    A) By competing against a discriminator.
    B) Pixel by pixel, conditioned on the previously generated pixels.
    C) By encoding the image into a latent space.
    D) By using a simple linear model.

    Correct Answer: C
1132. **Adversarial Examples** are inputs to a machine learning model that an attacker has intentionally designed to cause the model to:
    A) Overfit.
    B) Make a mistake (e.g., misclassify an image).
    C) Underfit.
    D) Train faster.

    Correct Answer: B
1133. **Regularization** in neural networks is primarily used to:
    A) Increase the training time.
    B) Reduce the model's complexity and prevent overfitting.
    C) Increase the model's complexity.
    D) Increase the learning rate.

    Correct Answer: B
1134. The **Softmax** function is defined as $\sigma(\mathbf{z})_i = \frac{e^{z_i}}{\sum_{j=1}^K e^{z_j}}$. What is the purpose of the exponential term $e^{z_i}$?
    A) To ensure the output values are negative.
    B) To ensure the output values are positive.
    C) To normalize the output.
    D) To introduce non-linearity.

    Correct Answer: A
1135. The **Xavier/Glorot Initialization** method is designed to:
    A) Set all weights to zero.
    B) Initialize the weights such that the variance of the activations remains roughly the same across all layers.
    C) Initialize the weights to a very large value.
    D) Only work with the ReLU activation function.

    Correct Answer: D
1136. **Learning Rate Decay** is a technique where the learning rate is:
    A) Kept constant.
    B) Increased over time.
    C) Decreased over time.
    D) Randomly selected at each iteration.

    Correct Answer: A
1137. **Weight Decay** (L2 Regularization) is equivalent to which type of prior in a Bayesian context?
    A) Uniform prior.
    B) Gaussian prior.
    C) Laplace prior.
    D) Exponential prior.

    Correct Answer: B
1138. **Batch Normalization** is typically applied:
    A) Before the convolutional layer.
    B) After the convolutional layer and before the activation function.
    C) After the activation function.
    D) Only to the output layer.

    Correct Answer: B
1139. **Instance Normalization** is a normalization technique that is particularly effective for which type of task?
    A) Text generation.
    B) Image style transfer.
    C) Time-series forecasting.
    D) Regression.

    Correct Answer: B
1140. **Residual Connections** in ResNet are also known as:
    A) Gated units.
    B) Skip connections.
    C) Pooling layers.
    D) Convolutional layers.

    Correct Answer: A
1141. **Inception Modules** are designed to address the problem of:
    A) Vanishing gradients.
    B) Choosing the optimal filter size for a convolutional layer.
    C) Exploding gradients.
    D) Overfitting.

    Correct Answer: B
1142. **YOLO** (You Only Look Once) is a popular object detection algorithm known for its:
    A) High accuracy but slow speed.
    B) High speed and real-time performance.
    C) Use of a simple linear model.
    D) Reliance on a large number of region proposals.

    Correct Answer: B
1143. The **Vanishing Gradient Problem** is a result of:
    A) The derivative of the activation function being close to zero over a large range of its input.
    B) The derivative of the activation function being very large.
    C) The learning rate being too high.
    D) The batch size being too small.

    Correct Answer: B
1144. The **Gate** mechanisms in an **LSTM** unit are implemented using which type of layer?
    A) Convolutional layers.
    B) Fully connected layers with a Sigmoid activation function.
    C) Max Pooling layers.
    D) Softmax layers.

    Correct Answer: A
1145. **GRU** networks are often preferred over LSTMs in some applications because:
    A) They are more complex.
    B) They have fewer parameters and are computationally less expensive.
    C) They are more prone to the vanishing gradient problem.
    D) They can only handle short sequences.

    Correct Answer: C
1146. The **Transformer's Decoder** is responsible for:
    A) Mapping the input sequence to a sequence of continuous representations.
    B) Generating the output sequence one element at a time.
    C) Calculating the loss function.
    D) Performing classification.

    Correct Answer: B
1147. **Masked Self-Attention** is used in the **Transformer's Decoder** to ensure that:
    A) The model can look at the entire input sequence.
    B) The prediction for a given time step can only depend on the known outputs at previous time steps.
    C) The model can only look at the current element.
    D) The model is strictly sequential.

    Correct Answer: A
1148. **Transfer Learning** is particularly effective in Deep Learning because:
    A) The initial layers of a deep network learn generic, low-level features (e.g., edges, textures) that are useful across many domains.
    B) The final layers of a deep network learn generic features.
    C) It eliminates the need for a loss function.
    D) It is only applicable to NLP tasks.

    Correct Answer: C
1149. **DeepDream** is a computer vision program that uses a CNN to:
    A) Generate realistic images.
    B) Find and enhance patterns in images, creating a dream-like, psychedelic appearance.
    C) Perform object detection.
    D) Time-series forecasting.

    Correct Answer: B
1150. **Adversarial Training** is a technique used to improve the robustness of a model by:
    A) Training the model on only clean data.
    B) Training the model on a mix of clean data and adversarial examples.
    C) Using a different loss function.
    D) Increasing the learning rate.

    Correct Answer: A
1151. The **Rectified Linear Unit (ReLU)** activation function is a **non-linear** function.
    A) True.
    B) False.
    C) Only for positive inputs.
    D) Only for negative inputs.

    Correct Answer: B
1152. The **Perceptron** is an example of a **linear classifier**.
    A) True.
    B) False.
    C) Only for binary classification.
    D) Only for multi-class classification.

    Correct Answer: D
1153. The **L1 Regularization** term in the loss function is proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: A
1154. **Weight Initialization** is important because it prevents the network from:
    A) Overfitting.
    B) Underfitting.
    C) Getting stuck in a state where all neurons in a layer learn the same thing.
    D) Training too slowly.

    Correct Answer: B
1155. **Adaptive Gradient (Adagrad)** is known to have a major drawback:
    A) It is computationally expensive.
    B) The learning rate can become infinitesimally small over time, causing the model to stop learning.
    C) It is prone to the exploding gradient problem.
    D) It is only applicable to shallow networks.

    Correct Answer: B
1156. **Layer Normalization** is a normalization technique that is particularly effective for which type of data?
    A) Image data.
    B) Sequential data (e.g., in RNNs and Transformers).
    C) Tabular data.
    D) Time-series data.

    Correct Answer: A
1157. **Dropout** is typically applied to which layers of a neural network?
    A) Only the input layer.
    B) Only the output layer.
    C) Hidden layers (e.g., fully connected or convolutional layers).
    D) Only the first hidden layer.

    Correct Answer: A
1158. **Max Pooling** is a form of:
    A) Regularization.
    B) Non-linearity.
    C) Downsampling.
    D) Upsampling.

    Correct Answer: B
1159. **Deconvolutional Layers** (or Transposed Convolutional Layers) are often used in CNNs for:
    A) Reducing the spatial resolution.
    B) Increasing the spatial resolution (upsampling), e.g., in segmentation or generation tasks.
    C) Introducing non-linearity.
    D) Reducing the number of channels.

    Correct Answer: B
1160. **YOLO** (You Only Look Once) is a **single-shot** object detection model, meaning it:
    A) Uses a two-stage process (region proposal and classification).
    B) Predicts bounding boxes and class probabilities directly from the full image in one pass.
    C) Only performs classification.
    D) Only performs localization.

    Correct Answer: A
1161. The **Vanishing Gradient Problem** is less severe in LSTMs and GRUs compared to standard RNNs because:
    A) They use a different activation function.
    B) The gate mechanisms allow for a more direct path for the gradient to flow through the cell state.
    C) They have fewer parameters.
    D) They are only used for short sequences.

    Correct Answer: B
1162. The **Output Gate** in an **LSTM** network controls:
    A) Which information from the previous hidden state is passed to the current hidden state.
    B) Which information from the cell state should be thrown away.
    C) Which new information is stored in the cell state.
    D) Which information from the cell state is exposed as the output (hidden state).

    Correct Answer: C
1163. **Attention** in the Transformer is calculated using the **Scaled Dot-Product Attention** mechanism. The scaling factor is:
    A) The square root of the dimension of the key vectors.
    B) The dimension of the query vectors.
    C) The batch size.
    D) The learning rate.

    Correct Answer: B
1164. **Transfer Learning** is most effective when the source task (pre-training) and the target task (fine-tuning) are:
    A) Completely unrelated.
    B) In the same domain or share similar low-level features.
    C) Both regression tasks.
    D) Both classification tasks.

    Correct Answer: A
1165. **Image-to-Image Translation** is a task where:
    A) An image is converted to text.
    B) An input image is transformed into a corresponding output image (e.g., grayscale to color, sketch to photo).
    C) An image is classified.
    D) An image is used to predict a time series.

    Correct Answer: B
1166. **Deep Learning** models are often preferred over traditional machine learning models when:
    A) The dataset is very small.
    B) The problem involves complex, high-dimensional data like images, text, or audio.
    C) The model needs to be highly interpretable.
    D) The computational resources are very limited.

    Correct Answer: B
1167. The **Softmax** function is a generalization of the **Sigmoid** function for:
    A) Regression.
    B) Binary classification.
    C) Multi-class classification.
    D) Unsupervised learning.

    Correct Answer: A
1168. The **He Initialization** method is specifically designed for networks using which activation function?
    A) Sigmoid.
    B) Tanh.
    C) ReLU.
    D) Softmax.

    Correct Answer: B
1169. **L1 Regularization** (Lasso) is often used for:
    A) Feature selection, as it drives some weights exactly to zero.
    B) Reducing the model's complexity without affecting the weights.
    C) Increasing the training time.
    D) Preventing the vanishing gradient problem.

    Correct Answer: D
1170. **Batch Normalization** helps to mitigate the problem of **Internal Covariate Shift**, which refers to:
    A) The change in the distribution of network activations due to the change in parameters of the preceding layers during training.
    B) The change in the distribution of the input data.
    C) The change in the loss function.
    D) The change in the learning rate.

    Correct Answer: B
1171. **Learning Rate Warmup** is a technique where the learning rate is:
    A) Kept constant.
    B) Gradually increased from a very small value to the initial learning rate at the beginning of training.
    C) Decreased over time.
    D) Randomly selected at each iteration.

    Correct Answer: B
1172. **Adam** is a **first-order** optimization algorithm.
    A) True.
    B) False.
    C) Only for shallow networks.
    D) Only for deep networks.

    Correct Answer: B
1173. **Weight Sharing** is a key concept in CNNs, where:
    A) All neurons in a layer have their own unique set of weights.
    B) The same set of weights (the filter/kernel) is used across different spatial locations of the input.
    C) The weights are shared between the Encoder and Decoder.
    D) The weights are shared between the Generator and Discriminator.

    Correct Answer: A
1174. **Autoencoders** are typically trained using which loss function?
    A) Cross-Entropy Loss.
    B) Mean Squared Error (MSE) or Binary Cross-Entropy (depending on the output type).
    C) Hinge Loss.
    D) Focal Loss.

    Correct Answer: A
1175. **Recurrent Neural Networks (RNNs)** are well-suited for tasks involving:
    A) Fixed-size input.
    B) Variable-length input and output sequences.
    C) Only image data.
    D) Only tabular data.

    Correct Answer: B
1176. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1177. **Overfitting** in neural networks is often addressed by:
    A) Increasing the number of parameters.
    B) Regularization techniques like Dropout and L2 regularization.
    C) Decreasing the batch size.
    D) Increasing the learning rate.

    Correct Answer: A
1178. The **Softplus** activation function is a smooth approximation of which other activation function?
    A) Sigmoid.
    B) Tanh.
    C) ReLU.
    D) Softmax.

    Correct Answer: B
1179. **Hinge Loss** is a loss function primarily used for:
    A) Regression.
    B) Classification with Support Vector Machines (SVMs).
    C) Time-series forecasting.
    D) Image generation.

    Correct Answer: C
1180. **Dropout** is a technique that can be seen as a way to:
    A) Reduce the model's complexity.
    B) Create a more robust network by preventing co-adaptation of neurons.
    C) Increase the training time.
    D) Eliminate the need for a loss function.

    Correct Answer: A
1181. **Exponential Decay** is a common method for:
    A) Weight initialization.
    B) Learning rate scheduling.
    C) Activation function.
    D) Loss function.

    Correct Answer: C
1182. **L2 Regularization** (Weight Decay) encourages the weights to be:
    A) Exactly zero.
    B) Small, but non-zero.
    C) Large and positive.
    D) Large and negative.

    Correct Answer: B
1183. **Batch Normalization** introduces two new learnable parameters per activation: a scaling factor ($\gamma$) and a shifting factor ($\beta$). What is the purpose of these parameters?
    A) To reduce the computational cost.
    B) To allow the network to learn the optimal mean and variance for the normalized activations.
    C) To introduce non-linearity.
    D) To replace the need for an activation function.

    Correct Answer: B
1184. **Max Pooling** is generally preferred over **Average Pooling** in the early layers of a CNN because:
    A) It is computationally simpler.
    B) It preserves the most prominent features (edges, corners) in the feature map.
    C) It is less prone to the vanishing gradient problem.
    D) It is a smooth, differentiable function.

    Correct Answer: A
1185. **Fully Convolutional Networks (FCNs)** are a type of CNN architecture primarily used for:
    A) Image classification.
    B) Semantic segmentation.
    C) Object detection.
    D) Text generation.

    Correct Answer: D
1186. **Non-Maximum Suppression (NMS)** is a post-processing step in object detection that is used to:
    A) Generate region proposals.
    B) Select the best bounding box among multiple overlapping predictions for the same object.
    C) Classify the proposed regions.
    D) Reduce the training time.

    Correct Answer: A
1187. The **Exploding Gradient Problem** is often addressed by:
    A) Using a larger learning rate.
    B) Using a smaller batch size.
    C) Gradient Clipping, which scales the gradients when they exceed a certain threshold.
    D) Using the Sigmoid activation function.

    Correct Answer: B
1188. The **Recurrent Connection** in an RNN allows information to persist from one step of the sequence to the next. This is achieved by:
    A) Using a fixed-size context vector.
    B) Feeding the output of the hidden layer at time $t-1$ as an input to the hidden layer at time $t$.
    C) Using a convolutional layer.
    D) Using a pooling layer.

    Correct Answer: B
1189. **Attention Mechanisms** can be classified into two main types: **Additive Attention** and **Dot-Product Attention**. The Transformer uses:
    A) Additive Attention.
    B) Dot-Product Attention (scaled).
    C) Both.
    D) Neither.

    Correct Answer: B
1190. **Fine-tuning** a pre-trained model for a new task typically involves:
    A) Training the entire network from scratch.
    B) Training only the final classification layer.
    C) Training the entire network, but with a very small learning rate.
    D) Freezing all layers and only training the final layer.

    Correct Answer: A
1191. **CycleGAN** uses a **Cycle Consistency Loss** to:
    A) Ensure the generated image is realistic.
    B) Ensure that translating an image from domain A to B and back to A results in an image close to the original.
    C) Perform classification.
    D) Reduce the training time.

    Correct Answer: B
1192. **Deep Learning** models are often considered **black-box** models because:
    A) They are computationally expensive.
    B) Their decision-making process is complex and difficult to interpret.
    C) They are only used for image data.
    D) They are only used for text data.

    Correct Answer: B
1193. The **Sigmoid** activation function is defined as $f(x) = \frac{1}{1 + e^{-x}}$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1194. The **Perceptron** learning rule is guaranteed to converge if:
    A) The data is non-linearly separable.
    B) The data is linearly separable.
    C) The learning rate is very small.
    D) The batch size is very large.

    Correct Answer: A
1195. **Overfitting** is characterized by a large gap between:
    A) Training loss and validation loss.
    B) Training accuracy and validation accuracy (where training accuracy is much higher).
    C) Training time and prediction time.
    D) The number of layers and the number of neurons.

    Correct Answer: C
1196. The **Swish** activation function, $f(x) = x \cdot \sigma(x)$, is an alternative to ReLU that is:
    A) Non-differentiable at zero.
    B) Smooth and non-monotonic.
    C) Only used for regression.
    D) Only used for binary classification.

    Correct Answer: B
1197. **Mean Absolute Error (MAE)** is a loss function often preferred over MSE when the data contains:
    A) No outliers.
    B) Many outliers.
    C) Only categorical features.
    D) Only numerical features.

    Correct Answer: A
1198. **Dropout** is applied during **training** but is typically **disabled** during **testing/inference**. When disabled, the weights are scaled by:
    A) The dropout rate ($p$).
    B) $1 / (1 - p)$.
    C) $1 - p$.
    D) $1 / p$.

    Correct Answer: C
1199. **Cyclical Learning Rates** are based on the idea that:
    A) A constant learning rate is always optimal.
    B) Increasing the learning rate can help the model escape saddle points and poor local minima.
    C) The learning rate should always decrease.
    D) The learning rate should always be zero.

    Correct Answer: B
1200. **Weight Initialization** methods like Xavier and He aim to keep the variance of the activations and gradients constant across layers to prevent:
    A) Overfitting.
    B) Vanishing/Exploding gradients.
    C) Underfitting.
    D) High computational cost.

    Correct Answer: A
1201. **Batch Normalization** is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width).
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1202. **Local Response Normalization (LRN)** was an early normalization technique used in AlexNet. It is now largely replaced by:
    A) Dropout.
    B) Batch Normalization.
    C) L2 Regularization.
    D) Max Pooling.

    Correct Answer: D
1203. **Residual Connections** in ResNet are an example of a **Highway Network** structure.
    A) True.
    B) False.
    C) Only for shallow networks.
    D) Only for deep networks.

    Correct Answer: A
1204. **DenseNet** is a CNN architecture that introduced the concept of:
    A) Only using a single convolutional layer.
    B) Connecting every layer to every other layer in a feedforward fashion.
    C) Using only Max Pooling.
    D) Replacing all convolutional layers with fully connected layers.

    Correct Answer: B
1205. **Single Shot MultiBox Detector (SSD)** is an object detection algorithm that is:
    A) A two-stage model.
    B) A single-shot model.
    C) Only used for image classification.
    D) Only used for image generation.

    Correct Answer: B
1206. The **Exploding Gradient Problem** is more common in RNNs than in FNNs because:
    A) The weights are shared across time steps, leading to repeated multiplication of the same large gradient.
    B) The weights are not shared.
    C) The activation function is linear.
    D) The batch size is very large.

    Correct Answer: A
1207. **Attention** in the Transformer is calculated using the **Query, Key, and Value** vectors. The **Query** vector is used to:
    A) Store the context information.
    B) Determine how much attention to pay to other positions.
    C) Provide the information to be attended to.
    D) Normalize the attention scores.

    Correct Answer: A
1208. **BERT** is a **bidirectional** model, while **GPT** is a **unidirectional** (left-to-right) model.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1209. **Generative Adversarial Networks (GANs)** are trained using a process called:
    A) Supervised learning.
    B) Unsupervised learning.
    C) Adversarial training (a form of minimax game).
    D) Reinforcement learning.

    Correct Answer: B
1210. **StyleGAN** is a state-of-the-art GAN architecture known for its ability to:
    A) Generate low-resolution images.
    B) Generate highly realistic and controllable high-resolution images.
    C) Perform object detection.
    D) Time-series forecasting.

    Correct Answer: A
1211. **Autoencoders** can be used for **Anomaly Detection** by:
    A) Training the model to reconstruct normal data and flagging samples with high reconstruction error as anomalies.
    B) Training the model to classify the data.
    C) Training the model to generate new data.
    D) Using a simple linear model.

    Correct Answer: B
1212. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: C
1213. **Overfitting** is a problem where the model learns:
    A) The underlying pattern in the data.
    B) The noise and specific details of the training data too well.
    C) Only the linear relationships.
    D) Only the non-linear relationships.

    Correct Answer: B
1214. The **GELU** (Gaussian Error Linear Unit) activation function is a smooth approximation of which other activation function?
    A) Sigmoid.
    B) Tanh.
    C) ReLU.
    D) Softmax.

    Correct Answer: A
1215. **L2 Regularization** (Weight Decay) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: B
1216. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1217. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: A
1218. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1219. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: D
1220. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: B
1221. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1222. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: B
1223. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: A
1224. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: A
1225. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: B
1226. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1227. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: A
1228. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1229. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: C
1230. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: A
1231. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: C
1232. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1233. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1234. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: A
1235. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: D
1236. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: A
1237. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1238. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1239. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1240. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: A
1241. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1242. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: B
1243. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1244. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: B
1245. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: B
1246. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1247. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: A
1248. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1249. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: B
1250. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: B
1251. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: B
1252. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: A
1253. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1254. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1255. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: A
1256. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1257. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1258. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1259. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1260. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: B
1261. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1262. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: B
1263. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1264. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: B
1265. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: B
1266. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1267. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: B
1268. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1269. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: B
1270. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: B
1271. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: B
1272. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1273. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1274. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1275. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: B
1276. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1277. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1278. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1279. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1280. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: B
1281. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: A
1282. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: D
1283. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1284. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: B
1285. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: C
1286. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1287. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: B
1288. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1289. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: B
1290. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: B
1291. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: B
1292. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1293. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1294. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1295. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: D
1296. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1297. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1298. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1299. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1300. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: B
1301. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1302. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: B
1303. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1304. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: D
1305. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: C
1306. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: C
1307. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: D
1308. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1309. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: B
1310. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: B
1311. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: B
1312. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1313. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1314. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: A
1315. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: B
1316. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1317. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1318. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1319. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1320. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: D
1321. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1322. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: B
1323. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1324. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: B
1325. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: B
1326. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1327. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: B
1328. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1329. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: D
1330. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: C
1331. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: C
1332. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: D
1333. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1334. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1335. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: B
1336. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1337. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1338. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1339. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: A
1340. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: B
1341. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1342. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: B
1343. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1344. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: B
1345. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: D
1346. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1347. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: B
1348. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1349. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: B
1350. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: B
1351. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: B
1352. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1353. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1354. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: D
1355. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: C
1356. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: C
1357. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: D
1358. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1359. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1360. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: B
1361. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: B
1362. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: B
1363. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1364. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: A
1365. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: B
1366. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1367. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: B
1368. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1369. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: B
1370. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: D
1371. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: B
1372. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1373. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1374. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1375. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: B
1376. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1377. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1378. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1379. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: D
1380. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.

    Correct Answer: C
1381. **Inception Modules** are designed to:
    A) Reduce the number of parameters.
    B) Allow the network to learn multiple feature representations at different scales simultaneously.
    C) Replace the pooling layer.
    D) Introduce non-linearity.

    Correct Answer: C
1382. **Fast R-CNN** improved upon R-CNN by:
    A) Using a single network to perform both region proposal and classification.
    B) Using a Region of Interest (RoI) pooling layer to extract fixed-size feature vectors from the feature map.
    C) Only performing classification.
    D) Only performing localization.

    Correct Answer: D
1383. The **Vanishing Gradient Problem** is a major challenge in training:
    A) Shallow networks.
    B) Very deep networks.
    C) Linear models.
    D) Non-linear models.

    Correct Answer: B
1384. The **Cell State** in an **LSTM** network is updated by:
    A) The input gate and the forget gate.
    B) The output gate and the forget gate.
    C) The input gate and the output gate.
    D) Only the forget gate.

    Correct Answer: B
1385. **GRU** networks have how many gates?
    A) One.
    B) Two (Update and Reset).
    C) Three (Input, Forget, Output).
    D) Four.

    Correct Answer: B
1386. The **Transformer** architecture is entirely based on:
    A) Convolutional layers.
    B) Recurrent layers.
    C) Attention mechanisms.
    D) Fully connected layers.

    Correct Answer: B
1387. **Self-Attention** is a mechanism that allows the model to:
    A) Process the sequence in a strictly sequential manner.
    B) Weigh the importance of different words in the input sequence when encoding a specific word.
    C) Reduce the computational complexity.
    D) Replace the need for an activation function.

    Correct Answer: B
1388. **GPT** models are primarily used for **generative** tasks, while **BERT** models are primarily used for **discriminative** tasks.
    A) True.
    B) False.
    C) Only for image data.
    D) Only for time-series data.

    Correct Answer: B
1389. **Generative Adversarial Networks (GANs)** are used to model the:
    A) Conditional probability distribution.
    B) Joint probability distribution.
    C) Underlying data distribution.
    D) Marginal probability distribution.

    Correct Answer: A
1390. **Conditional GANs (CGANs)** are used to:
    A) Generate random data.
    B) Generate data conditioned on a specific input (e.g., a class label).
    C) Perform classification.
    D) Perform regression.

    Correct Answer: B
1391. **Autoencoders** can be used for **Feature Extraction** by:
    A) Using the output of the decoder as the feature vector.
    B) Using the output of the encoder (the latent space representation) as the feature vector.
    C) Using the output of the input layer.
    D) Using the output of the output layer.

    Correct Answer: B
1392. The **Perceptron** is a linear model that uses a **step function** as its activation function.
    A) True.
    B) False.
    C) Only for regression.
    D) Only for multi-class classification.

    Correct Answer: B
1393. **Underfitting** is a problem where the model:
    A) Is too complex.
    B) Is too simple to capture the underlying pattern in the data.
    C) Is trained for too many epochs.
    D) Has too many parameters.

    Correct Answer: B
1394. The **Softplus** activation function is defined as $f(x) = \ln(1 + e^x)$. What is its range?
    A) $[0, 1]$.
    B) $[-1, 1]$.
    C) $(-\infty, \infty)$.
    D) $[0, \infty)$.

    Correct Answer: B
1395. **L1 Regularization** (Lasso) is a technique that:
    A) Encourages the weights to be exactly zero.
    B) Encourages the weights to be small, but non-zero.
    C) Increases the training time.
    D) Prevents the vanishing gradient problem.

    Correct Answer: D
1396. **Batch Normalization** is a technique that:
    A) Increases the training time.
    B) Reduces the dependence of gradients on the scale of the parameters or their initial values.
    C) Eliminates the need for an activation function.
    D) Only works with the Sigmoid activation function.

    Correct Answer: B
1397. **Learning Rate Warmup** is particularly important when using which type of optimization algorithm?
    A) SGD.
    B) Adam.
    C) Adagrad.
    D) RMSprop.

    Correct Answer: B
1398. **L2 Regularization** is equivalent to adding a penalty term to the loss function proportional to:
    A) The sum of the absolute values of the weights.
    B) The sum of the squares of the weights.
    C) The product of the weights.
    D) The mean of the weights.

    Correct Answer: B
1399. **Instance Normalization** is a normalization technique that is typically applied across which dimension of the input tensor?
    A) The spatial dimensions (height and width) and the channel dimension.
    B) The batch dimension.
    C) The channel dimension.
    D) The time dimension.

    Correct Answer: B
1400. **Residual Connections** in ResNet are a form of:
    A) Skip connection.
    B) Gated unit.
    C) Pooling layer.
    D) Convolutional layer.


*   Model Deployment Strategies: Batch, Real-time (Online), Edge/On-device
*   MLOps Tools and Platforms: Docker, Kubernetes, Kubeflow, MLflow, TensorFlow Extended (TFX)
*   Monitoring and Maintenance: Data Drift, Model Drift, Concept Drift, A/B Testing, Canary Deployments
*   Ethical AI and Governance: Fairness, Explainability (XAI - SHAP, LIME), Data Privacy (Differential Privacy)


    Correct Answer: B
1401. **Model Deployment** refers to the process of:
    A) Training the machine learning model.
    B) Making the trained machine learning model available for use in a production environment.
    C) Selecting the best features for the model.
    D) Cleaning and preprocessing the data.

    Correct Answer: B
1402. In a **Batch Deployment** strategy, predictions are generated:
    A) Instantly, as soon as a request is received.
    B) Periodically for a large volume of data at once.
    C) Directly on the user's device.
    D) Only during the training phase.

    Correct Answer: B
1403. **Real-time (Online) Deployment** is necessary when:
    A) The model is very small.
    B) Predictions must be made with low latency in response to individual requests.
    C) The data volume is very large.
    D) The model is deployed on a user's device.

    Correct Answer: D
1404. **Edge/On-device Deployment** is characterized by:
    A) The model running on a remote server.
    B) The model running directly on the end-user's device (e.g., smartphone, IoT device).
    C) The use of a large, complex model.
    D) The need for high-latency predictions.

    Correct Answer: C
1405. **Docker** is a tool used in MLOps primarily for:
    A) Orchestrating containerized applications.
    B) Creating lightweight, portable, and self-sufficient containers that package the model and its dependencies.
    C) Tracking experiments and managing models.
    D) Monitoring model performance.

    Correct Answer: A
1406. **Kubernetes** is an open-source system for:
    A) Building machine learning pipelines.
    B) Automating the deployment, scaling, and management of containerized applications.
    C) Storing large datasets.
    D) Performing feature engineering.

    Correct Answer: D
1407. **Kubeflow** is a platform dedicated to making deployments of machine learning workflows on **Kubernetes**:
    A) Simple, portable, and scalable.
    B) Complex and resource-intensive.
    C) Only suitable for small models.
    D) Only suitable for batch processing.

    Correct Answer: B
1408. **MLflow** is an open-source platform designed to manage the complete machine learning lifecycle, including:
    A) Data collection and cleaning.
    B) Experiment tracking, reproducible runs, and model management.
    C) Hardware provisioning.
    D) User interface design.

    Correct Answer: B
1409. **TensorFlow Extended (TFX)** is an end-to-end platform for deploying production ML pipelines. A key component of TFX is **TFX Data Validation**, which is used to:
    A) Train the model.
    B) Analyze and validate data, and detect anomalies and drift.
    C) Deploy the model to a server.
    D) Monitor the model's predictions.

    Correct Answer: B
1410. **Data Drift** occurs when:
    A) The model's predictions become inaccurate.
    B) The statistical properties of the input data change over time in an unexpected way.
    C) The model's weights change during deployment.
    D) The training data is too small.

    Correct Answer: B
1411. **Model Drift** (or performance degradation) occurs when:
    A) The model is retrained on new data.
    B) The model's predictive performance decreases over time on new, unseen data.
    C) The input data changes.
    D) The model is deployed to a new environment.

    Correct Answer: B
1412. **Concept Drift** is a specific type of model drift where:
    A) The relationship between the input features and the target variable changes over time.
    B) The input features change.
    C) The model's weights change.
    D) The model is retrained.

    Correct Answer: B
1413. **A/B Testing** in MLOps is a deployment strategy used to:
    A) Test two different versions of a model simultaneously in a production environment to see which performs better.
    B) Test the model on a small subset of the data.
    C) Test the model only on the training data.
    D) Test the model only on the test data.

    Correct Answer: A
1414. **Canary Deployment** is a strategy where:
    A) The new model version is deployed to all users at once.
    B) The new model version is deployed to a small subset of users first, and if successful, gradually rolled out to the rest.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1415. **Fairness** in AI refers to:
    A) The model being easy to understand.
    B) The model's predictions not being biased against specific groups (e.g., based on race, gender, or age).
    C) The model being highly accurate.
    D) The model being computationally efficient.

    Correct Answer: B
1416. **Explainability (XAI)** is the set of techniques that allow humans to:
    A) Understand the model's internal workings and the reasons behind its predictions.
    B) Increase the model's accuracy.
    C) Reduce the model's size.
    D) Increase the model's training speed.

    Correct Answer: B
1417. **SHAP (SHapley Additive exPlanations)** is a popular XAI method based on:
    A) Simple linear regression.
    B) Game theory, where feature contributions are calculated as Shapley values.
    C) Decision trees.
    D) Neural networks.

    Correct Answer: B
1418. **LIME (Local Interpretable Model-agnostic Explanations)** is an XAI method that:
    A) Provides a global explanation for the entire model.
    B) Creates a local, interpretable model (e.g., a linear model) around a single prediction to explain it.
    C) Only works for linear models.
    D) Only works for image data.

    Correct Answer: B
1419. **Data Privacy** in MLOps is a critical concern. **Differential Privacy** is a technique that:
    A) Encrypts the data before training.
    B) Adds a controlled amount of noise to the data to protect individual records while still allowing for aggregate analysis.
    C) Removes all sensitive information from the dataset.
    D) Only works for small datasets.

    Correct Answer: D
1420. **Federated Learning** is a privacy-preserving technique where:
    A) The model is trained on a central server.
    B) The model is trained on decentralized edge devices, and only the model updates (weights) are aggregated on a central server.
    C) The data is encrypted before training.
    D) The model is only used for classification.

    Correct Answer: B
1421. A key advantage of **Batch Deployment** is:
    A) Low latency.
    B) High throughput and efficient resource utilization for large volumes of data.
    C) Real-time prediction.
    D) On-device processing.

    Correct Answer: B
1422. A common challenge in **Real-time Deployment** is:
    A) Low data volume.
    B) Ensuring low latency and high availability of the prediction service.
    C) High resource utilization.
    D) The need for periodic retraining.

    Correct Answer: B
1423. **Edge Deployment** is particularly useful when:
    A) The model is very large.
    B) Internet connectivity is unreliable or non-existent, and low latency is required.
    C) High computational power is needed.
    D) The data is highly sensitive.

    Correct Answer: B
1424. **Containerization** (using tools like Docker) is essential in MLOps because it:
    A) Reduces the model's size.
    B) Ensures that the model runs consistently across different environments (development, testing, production).
    C) Increases the model's accuracy.
    D) Simplifies the model training process.

    Correct Answer: B
1425. **Kubernetes** is often used in MLOps to manage:
    A) The model training process.
    B) The scaling and load balancing of the prediction service (e.g., multiple Docker containers).
    C) The feature engineering process.
    D) The data collection process.

    Correct Answer: B
1426. **Kubeflow Pipelines** are used to:
    A) Store the trained model.
    B) Define and manage end-to-end machine learning workflows as a series of steps.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1427. **MLflow Tracking** is a component of MLflow used for:
    A) Deploying the model.
    B) Recording and querying experiments, including code, data, configuration, and results.
    C) Monitoring the model's performance.
    D) Managing the model's dependencies.

    Correct Answer: B
1428. **TFX Model Analysis** is a component of TFX used to:
    A) Train the model.
    B) Evaluate the model's performance on various slices of data and detect potential biases.
    C) Deploy the model to a server.
    D) Monitor the model's predictions.

    Correct Answer: D
1429. A common mitigation strategy for **Data Drift** is:
    A) Ignoring the drift.
    B) Retraining the model on the new data distribution.
    C) Using a simpler model.
    D) Increasing the model's complexity.

    Correct Answer: C
1430. **Model Retraining** is a necessary part of MLOps to address:
    A) Data drift and concept drift.
    B) The model's initial training error.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: A
1431. **Concept Drift** can be detected by monitoring the change in the relationship between:
    A) The input features.
    B) The input features and the target variable.
    C) The model's weights.
    D) The model's size.

    Correct Answer: D
1432. **Shadow Deployment** is a deployment strategy where:
    A) The new model version is deployed to all users at once.
    B) The new model version runs in parallel with the old version, but its predictions are not used for the final decision.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1433. **Bias** in an AI model can originate from:
    A) The model's architecture.
    B) Biased training data or biased feature engineering.
    C) The model's deployment environment.
    D) The model's size.

    Correct Answer: B
1434. **Explainability (XAI)** is particularly important in which type of application?
    A) Simple image classification.
    B) High-stakes decision-making (e.g., loan applications, medical diagnosis).
    C) Time-series forecasting.
    D) Unsupervised clustering.

    Correct Answer: B
1435. **SHAP** values explain the output of a model by:
    A) Training a simple linear model around the prediction.
    B) Attributing the prediction to the contribution of each feature.
    C) Visualizing the decision tree structure.
    D) Calculating the model's accuracy.

    Correct Answer: B
1436. **LIME** is a **model-agnostic** XAI technique, meaning it:
    A) Only works for linear models.
    B) Can be applied to any machine learning model (e.g., deep learning, random forest, SVM).
    C) Only works for image data.
    D) Only works for text data.

    Correct Answer: B
1437. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1438. **Privacy-Preserving Machine Learning (PPML)** techniques are used to:
    A) Increase the model's accuracy.
    B) Train and deploy models while protecting the confidentiality of the data.
    C) Reduce the model's size.
    D) Increase the model's training speed.

    Correct Answer: A
1439. **Model Serving** is the process of:
    A) Training the model.
    B) Hosting the model and exposing it as an API endpoint for real-time predictions.
    C) Monitoring the model's performance.
    D) Retraining the model.

    Correct Answer: B
1440. A key challenge in **Edge Deployment** is:
    A) Low latency.
    B) The limited computational resources and memory on edge devices.
    C) High data volume.
    D) The need for periodic retraining.

    Correct Answer: B
1441. **Docker Compose** is a tool for:
    A) Orchestrating containerized applications.
    B) Defining and running multi-container Docker applications.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1442. **Kubernetes Pods** are the smallest deployable units in Kubernetes. A Pod typically contains:
    A) Only one container.
    B) One or more containers that share the same network and storage resources.
    C) The entire Kubernetes cluster.
    D) The entire dataset.

    Correct Answer: B
1443. **Kubeflow Pipelines** are built using which underlying technology for container orchestration?
    A) Docker Compose.
    B) Kubernetes.
    C) MLflow.
    D) TFX.

    Correct Answer: B
1444. **MLflow Models** is a component of MLflow used for:
    A) Deploying the model.
    B) Packaging and managing models in a standard format that can be deployed to various platforms.
    C) Tracking experiments.
    D) Monitoring the model's performance.

    Correct Answer: D
1445. **TFX Trainer** is a component of TFX used to:
    A) Validate the data.
    B) Train the machine learning model.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1446. **Feature Drift** is a type of data drift where:
    A) The distribution of the target variable changes.
    B) The distribution of one or more input features changes.
    C) The relationship between the features and the target changes.
    D) The model's weights change.

    Correct Answer: B
1447. **Prediction Drift** is a type of model drift where:
    A) The distribution of the model's predictions changes over time.
    B) The distribution of the input features changes.
    C) The relationship between the features and the target changes.
    D) The model's weights change.

    Correct Answer: B
1448. **Champion/Challenger** is a deployment strategy similar to A/B testing, where:
    A) The new model (challenger) is tested against the currently deployed model (champion).
    B) The new model is deployed to all users at once.
    C) The old model is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1449. **Algorithmic Bias** can be introduced during which phase of the ML lifecycle?
    A) Data collection and labeling.
    B) Feature engineering.
    C) Model training and evaluation.
    D) All of the above.

    Correct Answer: B
1450. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1451. **Permutation Feature Importance** is an XAI method that measures:
    A) The contribution of each feature to a single prediction.
    B) The increase in the model's prediction error when the values of a single feature are randomly shuffled.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1452. **Counterfactual Explanations** are an XAI method that answers the question:
    A) What features contributed most to this prediction?
    B) What is the model's overall accuracy?
    C) What is the smallest change to the input features that would change the prediction to a desired outcome?
    D) How was the model trained?

    Correct Answer: B
1453. **Synthetic Data Generation** is a data privacy technique that:
    A) Encrypts the data before training.
    B) Creates new, artificial data that preserves the statistical properties of the original data but does not contain any real individual records.
    C) Removes all sensitive information from the dataset.
    D) Only works for small datasets.

    Correct Answer: D
1454. **Secure Multi-Party Computation (SMPC)** is a privacy-preserving technique that allows:
    A) The model to be trained on a central server.
    B) Multiple parties to jointly compute a function over their inputs while keeping those inputs private.
    C) The data to be encrypted before training.
    D) The model to be deployed on the edge.

    Correct Answer: C
1455. **Model Registry** is a component of MLOps used for:
    A) Training the model.
    B) Centralized storage, versioning, and management of trained models.
    C) Monitoring the model's performance.
    D) Deploying the model.

    Correct Answer: A
1456. **Model Compression** techniques (e.g., pruning, quantization) are primarily used for:
    A) Increasing the model's accuracy.
    B) Reducing the model's size and computational requirements, especially for edge deployment.
    C) Increasing the model's training speed.
    D) Improving the model's interpretability.

    Correct Answer: D
1457. **CI/CD (Continuous Integration/Continuous Delivery)** in MLOps refers to:
    A) The process of continuously training the model.
    B) The automation of the process of building, testing, and deploying the model and its associated services.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1458. **Kubernetes Services** are used to:
    A) Store the trained model.
    B) Provide a stable network endpoint for a set of Pods (e.g., the prediction service).
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1459. **MLflow Projects** is a component of MLflow used for:
    A) Deploying the model.
    B) Packaging ML code in a reusable and reproducible format.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1460. **TFX Pusher** is a component of TFX used to:
    A) Train the model.
    B) Deploy the model to a serving infrastructure (e.g., TensorFlow Serving).
    C) Validate the data.
    D) Monitor the model.

    Correct Answer: B
1461. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1462. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: B
1463. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: A
1464. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: B
1465. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: B
1466. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1467. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: B
1468. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1469. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: D
1470. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1471. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1472. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1473. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1474. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1475. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: B
1476. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1477. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1478. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: D
1479. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: C
1480. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: A
1481. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: D
1482. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1483. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1484. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: B
1485. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1486. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1487. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1488. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: A
1489. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1490. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1491. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1492. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: B
1493. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: B
1494. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: B
1495. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: B
1496. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1497. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: B
1498. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1499. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1500. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1501. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1502. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1503. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1504. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1505. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: C
1506. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1507. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1508. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1509. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: B
1510. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1511. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1512. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1513. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1514. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: B
1515. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1516. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1517. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: A
1518. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1519. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1520. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1521. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1522. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: B
1523. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: B
1524. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: A
1525. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: C
1526. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: A
1527. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: A
1528. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1529. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1530. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1531. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1532. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: A
1533. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1534. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1535. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: B
1536. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1537. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1538. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: C
1539. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: A
1540. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1541. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1542. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1543. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1544. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: B
1545. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1546. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1547. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1548. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: A
1549. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1550. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1551. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1552. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: B
1553. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: B
1554. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: A
1555. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: B
1556. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1557. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: B
1558. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1559. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1560. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1561. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1562. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1563. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1564. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1565. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: B
1566. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1567. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1568. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1569. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: B
1570. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1571. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1572. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1573. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1574. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: B
1575. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1576. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1577. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1578. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1579. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1580. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1581. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1582. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: B
1583. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: B
1584. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: B
1585. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: B
1586. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1587. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: A
1588. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1589. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1590. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1591. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1592. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1593. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1594. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1595. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: B
1596. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1597. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1598. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: A
1599. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: B
1600. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1601. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1602. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1603. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1604. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: C
1605. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: A
1606. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1607. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1608. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1609. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1610. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1611. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1612. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: C
1613. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: B
1614. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: A
1615. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: B
1616. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1617. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: B
1618. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1619. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1620. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: A
1621. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1622. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1623. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1624. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1625. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: B
1626. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1627. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1628. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1629. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: B
1630. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1631. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1632. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1633. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1634. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: B
1635. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1636. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1637. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1638. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1639. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1640. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1641. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1642. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: B
1643. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: B
1644. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: B
1645. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: B
1646. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1647. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: B
1648. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1649. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1650. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1651. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1652. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1653. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1654. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1655. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: B
1656. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1657. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1658. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1659. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: B
1660. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1661. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1662. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1663. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1664. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: B
1665. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1666. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1667. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1668. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1669. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1670. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1671. **Drift Detection** is a crucial part of MLOps because:
    A) It ensures the model is always accurate.
    B) It provides an early warning system for when a model's performance is likely to degrade due to changes in the data or concept.
    C) It reduces the model's size.
    D) It increases the model's training speed.

    Correct Answer: B
1672. **Retraining Frequency** in MLOps is typically determined by:
    A) A fixed schedule.
    B) The rate of data or concept drift and the model's performance degradation.
    C) The model's size.
    D) The model's interpretability.

    Correct Answer: B
1673. **Model Governance** in MLOps refers to:
    A) The technical process of deploying the model.
    B) The set of policies, procedures, and standards for managing the entire ML lifecycle, ensuring compliance and ethical use.
    C) The process of collecting data.
    D) The process of feature engineering.

    Correct Answer: B
1674. **Explainability (XAI)** is a requirement for compliance with which regulation?
    A) GDPR (General Data Protection Regulation).
    B) CCPA (California Consumer Privacy Act).
    C) HIPAA (Health Insurance Portability and Accountability Act).
    D) All of the above, depending on the application domain.

    Correct Answer: B
1675. **Feature Attribution** is a general term for XAI methods that:
    A) Explain the model's overall accuracy.
    B) Quantify the contribution of each input feature to a model's prediction.
    C) Visualize the decision boundary.
    D) Reduce the model's size.

    Correct Answer: B
1676. **Global Explanations** in XAI aim to:
    A) Explain a single prediction.
    B) Explain the model's overall behavior and how it makes decisions across the entire dataset.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1677. **Differential Privacy** is a technique that provides a strong, mathematical guarantee of:
    A) Model accuracy.
    B) Individual privacy.
    C) Computational efficiency.
    D) Model interpretability.

    Correct Answer: B
1678. **Homomorphic Encryption** is a data privacy technique that allows:
    A) The data to be encrypted before training.
    B) Computations to be performed on encrypted data without decrypting it first.
    C) The model to be trained on decentralized devices.
    D) The model to be deployed on the edge.

    Correct Answer: B
1679. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1680. **Quantization** is a model compression technique that:
    A) Removes unnecessary weights.
    B) Reduces the precision of the numbers used to represent the model's weights and activations (e.g., from 32-bit to 8-bit).
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1681. **Continuous Training (CT)** in MLOps refers to:
    A) Training the model only once.
    B) The automated process of retraining the model in response to new data or detected drift.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1682. **Kubernetes Deployments** are used to:
    A) Store the trained model.
    B) Define the desired state for a set of Pods and manage the rolling updates and rollbacks of the application.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1683. **MLflow Registry** is a component of MLflow used for:
    A) Tracking experiments.
    B) Centralized storage, versioning, and management of trained models.
    C) Deploying the model.
    D) Monitoring the model's performance.

    Correct Answer: B
1684. **TFX Evaluator** is a component of TFX used to:
    A) Train the model.
    B) Compute metrics and validate the model's performance against a baseline.
    C) Deploy the model.
    D) Monitor the model.

    Correct Answer: B
1685. **Data Drift** can be detected by monitoring the change in the distribution of:
    A) The target variable.
    B) The input features.
    C) The model's predictions.
    D) All of the above.

    Correct Answer: B
1686. **Model Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1687. **Concept Drift** is a problem that requires:
    A) A simpler model.
    B) A more complex model.
    C) Model retraining.
    D) More data collection.

    Correct Answer: B
1688. **Blue/Green Deployment** is a strategy where:
    A) The new model version (Green) is deployed alongside the old version (Blue), and traffic is switched instantly once the Green version is validated.
    B) The new model version is deployed to a small subset of users first.
    C) The old model version is immediately retired.
    D) The model is deployed on the edge.

    Correct Answer: B
1689. **Mitigation of Bias** in AI models can involve:
    A) Pre-processing techniques (e.g., re-weighting the data).
    B) In-processing techniques (e.g., adding a fairness constraint to the loss function).
    C) Post-processing techniques (e.g., adjusting the model's output).
    D) All of the above.

    Correct Answer: B
1690. **Explainability (XAI)** is a key component of:
    A) Model training.
    B) Model governance and compliance.
    C) Data collection.
    D) Feature engineering.

    Correct Answer: B
1691. **Partial Dependence Plots (PDPs)** are an XAI method that shows:
    A) The contribution of each feature to a single prediction.
    B) The marginal effect of one or two features on the predicted outcome of a model.
    C) The model's accuracy.
    D) The model's training time.

    Correct Answer: B
1692. **Local Explanations** in XAI aim to:
    A) Explain the model's overall behavior.
    B) Explain a single prediction.
    C) Only work for linear models.
    D) Only work for image data.

    Correct Answer: B
1693. **Differential Privacy** is a technique that adds noise to:
    A) The model's predictions.
    B) The data or the model's training process.
    C) The model's weights.
    D) The model's size.

    Correct Answer: B
1694. **Federated Learning** is a privacy-preserving technique that is particularly useful for:
    A) Centralized data.
    B) Data that is distributed across many devices and cannot be easily moved (e.g., mobile phone data).
    C) Encrypted data.
    D) Synthetic data.

    Correct Answer: B
1695. **Model Serving** frameworks (e.g., TensorFlow Serving, TorchServe) are designed to:
    A) Train the model.
    B) Optimize the model for high-throughput, low-latency serving in production.
    C) Monitor the model's performance.
    D) Retrain the model.

    Correct Answer: B
1696. **Pruning** is a model compression technique that:
    A) Reduces the precision of the numbers.
    B) Removes unnecessary weights or neurons from the network.
    C) Increases the model's size.
    D) Increases the model's training speed.

    Correct Answer: B
1697. **Continuous Integration (CI)** in MLOps refers to:
    A) The automation of the process of building and testing the model and its associated services.
    B) The automation of the process of deploying the model.
    C) The process of continuously monitoring the model.
    D) The process of continuously collecting data.

    Correct Answer: B
1698. **Kubernetes Ingress** is used to:
    A) Store the trained model.
    B) Provide an external HTTP/HTTPS route to services within the cluster.
    C) Monitor the model's performance.
    D) Deploy the model to the edge.

    Correct Answer: B
1699. **MLflow Recipes** is a component of MLflow used for:
    A) Deploying the model.
    B) Providing a set of conventions and best practices for building production-ready ML pipelines.
    C) Tracking experiments.
    D) Managing models.

    Correct Answer: B
1700. **TFX Resolver** is a component of TFX used to:
    A) Train the model.
    B) Select the best model and data to use for deployment or further analysis.
    C) Deploy the model.
    D) Monitor the model.


*   Reinforcement Learning (RL) Fundamentals: Agent, Environment, State, Action, Reward, Policy, Value Function
*   RL Algorithms: Q-Learning, SARSA, Deep Q-Networks (DQN), Policy Gradients (REINFORCE, Actor-Critic)
*   Advanced ML Topics: Generative Models (GANs, VAEs), Transfer Learning, AutoML
*   Time Series Analysis: ARIMA, Prophet, Recurrent Neural Networks (RNNs)


    Correct Answer: B
1701. In Reinforcement Learning (RL), the **Agent** is defined as:
    A) The system that provides the reward signal.
    B) The entity that makes decisions and takes actions in the environment.
    C) The set of all possible situations the agent can be in.
    D) The sequence of actions taken by the agent.

    Correct Answer: B
1702. The **Environment** in RL is responsible for:
    A) Choosing the next action for the agent.
    B) Receiving the agent's action and returning the new state and the reward.
    C) Storing the agent's past experiences.
    D) Updating the agent's policy.

    Correct Answer: B
1703. The **State** in RL represents:
    A) The action taken by the agent.
    B) A summary of the current situation that the agent uses to decide on the next action.
    C) The immediate feedback the agent receives.
    D) The long-term goal of the agent.

    Correct Answer: B
1704. The **Reward** signal in RL is:
    A) A long-term measure of the agent's performance.
    B) An immediate, scalar feedback from the environment indicating the desirability of the last action.
    C) The probability distribution over actions.
    D) The expected return from a state.

    Correct Answer: B
1705. The **Policy** ($\pi$) in RL is a function that maps:
    A) States to rewards.
    B) States to actions (or a probability distribution over actions).
    C) Actions to states.
    D) Rewards to states.

    Correct Answer: B
1706. The **Value Function** ($V^\pi(s)$) in RL estimates:
    A) The immediate reward from state $s$.
    B) The expected long-term return (cumulative discounted reward) starting from state $s$ and following policy $\pi$.
    C) The probability of taking an action in state $s$.
    D) The total number of steps until the goal is reached.

    Correct Answer: B
1707. **Q-Learning** is a model-free, off-policy RL algorithm that learns:
    A) The optimal policy directly.
    B) The optimal action-value function $Q(s, a)$.
    C) The state-value function $V(s)$.
    D) The transition probabilities of the environment.

    Correct Answer: B
1708. The update rule in Q-Learning uses the **Bellman Equation** to:
    A) Calculate the immediate reward.
    B) Update the Q-value based on the maximum expected future reward from the next state.
    C) Update the policy directly.
    D) Calculate the probability of the next state.

    Correct Answer: B
1709. **SARSA (State-Action-Reward-State-Action)** is an on-policy RL algorithm, meaning it:
    A) Learns the optimal policy regardless of the policy being followed.
    B) Learns the value of the policy currently being followed.
    C) Only works for deterministic environments.
    D) Only works for continuous action spaces.

    Correct Answer: B
1710. **Deep Q-Networks (DQN)** extends Q-Learning by using a **Neural Network** to:
    A) Store the Q-table in memory.
    B) Approximate the Q-value function.
    C) Calculate the immediate reward.
    D) Determine the next state.

    Correct Answer: B
1711. A key technique used in DQN to stabilize training is **Experience Replay**, which involves:
    A) Using a separate target network.
    B) Storing past transitions (s, a, r, s') in a buffer and sampling mini-batches from it for training.
    C) Using a smaller learning rate.
    D) Normalizing the input states.

    Correct Answer: B
1712. **Policy Gradient** methods in RL aim to:
    A) Directly learn the optimal Q-value function.
    B) Directly learn a parameterized policy that maximizes the expected return.
    C) Learn the environment's transition model.
    D) Only work for discrete action spaces.

    Correct Answer: B
1713. The **REINFORCE** algorithm is a simple Policy Gradient method that uses:
    A) The Q-value function to update the policy.
    B) Monte Carlo estimation of the return to update the policy parameters.
    C) A separate value function to reduce variance.
    D) A target network to stabilize training.

    Correct Answer: B
1714. **Actor-Critic** methods combine:
    A) Q-Learning and SARSA.
    B) Policy Gradient methods (the **Actor**) and Value-based methods (the **Critic**).
    C) Supervised and Unsupervised Learning.
    D) Generative and Discriminative models.

    Correct Answer: B
1715. In Actor-Critic methods, the **Critic** is responsible for:
    A) Selecting the action.
    B) Estimating the value function (or Q-function) to critique the actor's action.
    C) Updating the policy parameters.
    D) Interacting with the environment.

    Correct Answer: B
1716. **Generative Adversarial Networks (GANs)** consist of two competing neural networks:
    A) A Policy Network and a Value Network.
    B) A Discriminator and a Classifier.
    C) A Generator and a Discriminator.
    D) An Encoder and a Decoder.

    Correct Answer: B
1717. In a GAN, the **Generator** network's role is to:
    A) Distinguish between real and fake data.
    B) Generate synthetic data samples that are indistinguishable from real data.
    C) Classify the input data.
    D) Encode the input data into a latent space.

    Correct Answer: B
1718. In a GAN, the **Discriminator** network's role is to:
    A) Generate synthetic data samples.
    B) Determine whether an input sample is real (from the training data) or fake (from the generator).
    C) Encode the input data into a latent space.
    D) Calculate the loss function.

    Correct Answer: B
1719. **Variational Autoencoders (VAEs)** are a type of generative model that learns:
    A) A deterministic mapping from a latent space to the data space.
    B) A probabilistic mapping from a latent space to the data space, allowing for sampling and interpolation.
    C) To distinguish between real and fake data.
    D) To classify the input data.

    Correct Answer: B
1720. **Transfer Learning** is a technique where:
    A) A model is trained from scratch on a new, large dataset.
    B) A model trained on one task is re-purposed or fine-tuned for a second, related task.
    C) The model's weights are randomly initialized.
    D) The model is trained on a small dataset.

    Correct Answer: B
1721. A common application of Transfer Learning in Computer Vision is:
    A) Training a new model for a new task using random weights.
    B) Using a pre-trained model (e.g., VGG, ResNet) as a feature extractor or for fine-tuning on a new image classification task.
    C) Generating new images.
    D) Performing unsupervised clustering.

    Correct Answer: B
1722. **AutoML (Automated Machine Learning)** aims to:
    A) Manually select the best model and hyperparameters.
    B) Automate the end-to-end process of applying machine learning, including feature engineering, model selection, and hyperparameter tuning.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1723. **Neural Architecture Search (NAS)** is a subfield of AutoML that focuses on:
    A) Automating the process of data cleaning.
    B) Automating the design of the neural network architecture itself.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1724. **Time Series Analysis** deals with data where:
    A) The data points are independent of each other.
    B) The data points are indexed, ordered, and often equally spaced over time.
    C) The data is unstructured.
    D) The data is only used for classification.

    Correct Answer: B
1725. **ARIMA (AutoRegressive Integrated Moving Average)** is a classical statistical model for time series forecasting that combines:
    A) Regression and classification.
    B) Autoregression (AR), Differencing (I), and Moving Average (MA) components.
    C) Supervised and unsupervised learning.
    D) Policy and value functions.

    Correct Answer: B
1726. The **Autoregressive (AR)** component in ARIMA indicates that:
    A) The current value is a linear combination of past error terms.
    B) The current value is a linear combination of past values of the series.
    C) The series is stationary.
    D) The series is non-stationary.

    Correct Answer: B
1727. The **Integrated (I)** component in ARIMA refers to:
    A) The use of a moving average.
    B) The use of differencing to make the time series stationary.
    C) The use of past values.
    D) The use of external regressors.

    Correct Answer: B
1728. **Prophet** is a time series forecasting tool developed by Facebook that is particularly good for:
    A) Highly complex, non-linear time series.
    B) Time series with strong seasonal effects and holidays.
    C) Time series with no trend or seasonality.
    D) Short time series.

    Correct Answer: B
1729. **Recurrent Neural Networks (RNNs)** are a class of neural networks that are well-suited for time series data because they:
    A) Treat each data point independently.
    B) Have internal memory (hidden state) that allows them to process sequences of inputs.
    C) Only work for stationary data.
    D) Only work for classification tasks.

    Correct Answer: B
1730. **Long Short-Term Memory (LSTM)** networks are a type of RNN designed to:
    A) Only remember short-term dependencies.
    B) Overcome the vanishing gradient problem and capture long-term dependencies in sequences.
    C) Only work for discrete data.
    D) Only work for image data.

    Correct Answer: B
1731. In RL, the **Exploration vs. Exploitation** trade-off refers to the balance between:
    A) Choosing the action with the highest estimated value (exploitation) and trying new actions to improve value estimates (exploration).
    B) Choosing a simple model and a complex model.
    C) Using a large dataset and a small dataset.
    D) Training the model and deploying the model.

    Correct Answer: B
1732. The **$\epsilon$-greedy** strategy is a common method to handle the exploration-exploitation trade-off by:
    A) Always choosing the action with the highest Q-value.
    B) Choosing a random action with probability $\epsilon$ and the greedy action with probability $1-\epsilon$.
    C) Always choosing a random action.
    D) Choosing the action with the lowest Q-value.

    Correct Answer: B
1733. The **Discount Factor** ($\gamma$) in RL determines:
    A) The learning rate of the agent.
    B) The importance of future rewards relative to immediate rewards.
    C) The probability of taking a random action.
    D) The size of the state space.

    Correct Answer: B
1734. **Off-policy** RL algorithms, like Q-Learning, learn:
    A) The value of the policy currently being followed.
    B) The optimal policy, independent of the policy used to generate the data.
    C) The environment's transition model.
    D) The immediate reward.

    Correct Answer: B
1735. **On-policy** RL algorithms, like SARSA, learn:
    A) The optimal policy, independent of the policy used to generate the data.
    B) The value of the policy currently being followed.
    C) The environment's transition model.
    D) The immediate reward.

    Correct Answer: B
1736. In DQN, the **Target Network** is used to:
    A) Calculate the loss function.
    B) Provide stable targets for the Q-value update, reducing oscillations during training.
    C) Generate the next action.
    D) Store the experience replay buffer.

    Correct Answer: B
1737. **Double DQN (DDQN)** was introduced to address which limitation of standard DQN?
    A) The vanishing gradient problem.
    B) The overestimation of Q-values.
    C) The need for a large experience replay buffer.
    D) The slow convergence.

    Correct Answer: B
1738. **Policy Gradient** methods are generally preferred over Q-Learning for:
    A) Discrete action spaces.
    B) Continuous action spaces.
    C) Small state spaces.
    D) Deterministic environments.

    Correct Answer: B
1739. The **Advantage Function** ($A(s, a)$) in Actor-Critic methods is defined as:
    A) $Q(s, a) - V(s)$.
    B) $V(s) - Q(s, a)$.
    C) $R(s, a) + \gamma V(s')$.
    D) $R(s, a) - V(s)$.

    Correct Answer: B
1740. **A2C (Advantage Actor-Critic)** is a synchronous, deterministic version of which other popular Actor-Critic algorithm?
    A) REINFORCE.
    B) SARSA.
    C) A3C (Asynchronous Advantage Actor-Critic).
    D) DQN.

    Correct Answer: B
1741. The primary goal of the **Generator** in a GAN is to:
    A) Minimize the probability of the Discriminator being correct.
    B) Maximize the probability of the Discriminator being correct.
    C) Minimize the loss function.
    D) Maximize the reward.

    Correct Answer: A
1742. The primary goal of the **Discriminator** in a GAN is to:
    A) Minimize the probability of the Discriminator being correct.
    B) Maximize the probability of the Discriminator being correct.
    C) Minimize the loss function.
    D) Maximize the reward.

    Correct Answer: B
1743. **Mode Collapse** is a common failure mode in GANs where the Generator:
    A) Only generates a small subset of the possible data distribution.
    B) Generates a wide variety of data.
    C) Overfits to the training data.
    D) Fails to converge.

    Correct Answer: A
1744. The **Latent Space** in a VAE is:
    A) The input data space.
    B) A lower-dimensional, continuous representation space where data is encoded.
    C) The output data space.
    D) The space of the model's weights.

    Correct Answer: B
1745. **Fine-tuning** in Transfer Learning involves:
    A) Training only the last layer of a pre-trained model.
    B) Training all layers of a pre-trained model, typically with a very small learning rate.
    C) Randomly initializing all weights.
    D) Using the pre-trained model as a fixed feature extractor.

    Correct Answer: B
1746. **Feature Extraction** in Transfer Learning involves:
    A) Training all layers of a pre-trained model.
    B) Using the pre-trained model's convolutional base as a fixed feature extractor and training only a new classifier on top.
    C) Randomly initializing all weights.
    D) Generating new features.

    Correct Answer: B
1747. **Hyperparameter Optimization (HPO)** is a key component of AutoML that involves:
    A) Selecting the best model architecture.
    B) Finding the set of hyperparameters (e.g., learning rate, number of layers) that yields the best model performance.
    C) Automating the deployment process.
    D) Automating the data cleaning process.

    Correct Answer: B
1748. **Bayesian Optimization** is a popular technique for HPO because it:
    A) Explores the hyperparameter space randomly.
    B) Uses a probabilistic model (surrogate function) to guide the search, balancing exploration and exploitation efficiently.
    C) Only works for a small number of hyperparameters.
    D) Only works for deep learning models.

    Correct Answer: A
1749. A **Stationary Time Series** is one where:
    A) The mean, variance, and autocorrelation structure do not change over time.
    B) The mean and variance change over time.
    C) The data points are independent.
    D) The data is only used for classification.

    Correct Answer: B
1750. **Differencing** is a technique used in ARIMA to:
    A) Introduce seasonality.
    B) Remove the trend and make a non-stationary time series stationary.
    C) Calculate the moving average.
    D) Determine the autoregressive order.

    Correct Answer: B
1751. The **Moving Average (MA)** component in ARIMA indicates that:
    A) The current value is a linear combination of past values of the series.
    B) The current value is a linear combination of past error terms (residuals).
    C) The series is stationary.
    D) The series is non-stationary.

    Correct Answer: B
1752. **Prophet** models a time series as a combination of:
    A) Autoregression and moving average.
    B) Trend, seasonality, and holiday effects.
    C) Policy and value functions.
    D) Encoder and decoder.

    Correct Answer: B
1753. The main drawback of a standard **RNN** is:
    A) Its inability to process sequences.
    B) The vanishing/exploding gradient problem, making it difficult to learn long-term dependencies.
    C) Its slow training speed.
    D) Its large memory footprint.

    Correct Answer: B
1754. The **Forget Gate** in an LSTM cell is responsible for:
    A) Deciding which information to add to the cell state.
    B) Deciding which information to throw away from the cell state.
    C) Calculating the output of the cell.
    D) Calculating the hidden state.

    Correct Answer: C
1755. The **Input Gate** in an LSTM cell is responsible for:
    A) Deciding which information to throw away from the cell state.
    B) Deciding which new information to add to the cell state.
    C) Calculating the output of the cell.
    D) Calculating the hidden state.

    Correct Answer: A
1756. The **Output Gate** in an LSTM cell is responsible for:
    A) Deciding which information to throw away from the cell state.
    B) Deciding which new information to add to the cell state.
    C) Determining the value of the next hidden state (output) based on the cell state.
    D) Calculating the cell state.

    Correct Answer: B
1757. In RL, the **Markov Property** states that:
    A) The future is independent of the past given the present state.
    B) The future is dependent on the entire past history.
    C) The reward is always positive.
    D) The policy is always deterministic.

    Correct Answer: B
1758. A **Markov Decision Process (MDP)** is a formal framework for RL that includes:
    A) States, actions, rewards, and a policy.
    B) States, actions, rewards, transition probabilities, and a discount factor.
    C) Only states and actions.
    D) Only rewards and a policy.

    Correct Answer: B
1759. **Value Iteration** and **Policy Iteration** are two classical algorithms for solving:
    A) Supervised learning problems.
    B) MDPs when the environment model (transition probabilities and rewards) is known.
    C) Unsupervised learning problems.
    D) Time series forecasting.

    Correct Answer: B
1760. **Temporal Difference (TD) Learning** is a model-free RL method that updates value estimates based on:
    A) The final return of an episode.
    B) The difference between the estimated value of the current state and the estimated value of the next state (plus the immediate reward).
    C) The immediate reward only.
    D) The policy gradient.

    Correct Answer: B
1761. **Q-Learning** is a form of:
    A) Monte Carlo learning.
    B) Temporal Difference (TD) learning.
    C) Policy gradient learning.
    D) Supervised learning.

    Correct Answer: B
1762. The **Exploding Gradient Problem** in RNNs is typically addressed by:
    A) Using a smaller learning rate.
    B) Gradient clipping (rescaling gradients when they exceed a threshold).
    C) Using a larger batch size.
    D) Using a simpler model.

    Correct Answer: C
1763. **Gated Recurrent Units (GRUs)** are a simpler alternative to LSTMs that use:
    A) Three gates (forget, input, output).
    B) Two gates (reset and update).
    C) No gates.
    D) Four gates.

    Correct Answer: B
1764. **Sequence-to-Sequence (Seq2Seq)** models, often built with RNNs/LSTMs, are used for tasks like:
    A) Image classification.
    B) Machine translation and sequence generation.
    C) Unsupervised clustering.
    D) Time series decomposition.

    Correct Answer: A
1765. **Attention Mechanisms** in sequence models were introduced to:
    A) Speed up training.
    B) Allow the model to selectively focus on the most relevant parts of the input sequence when generating an output.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1766. The **Transformer** architecture, which has largely replaced RNNs/LSTMs in many sequence tasks, relies entirely on:
    A) Recurrent connections.
    B) Convolutional layers.
    C) Attention mechanisms (specifically, multi-head self-attention).
    D) Gated recurrent units.

    Correct Answer: B
1767. **BERT (Bidirectional Encoder Representations from Transformers)** is a pre-trained language model that uses:
    A) A standard RNN.
    B) A Transformer encoder.
    C) A Transformer decoder.
    D) A GAN.

    Correct Answer: B
1768. **GPT (Generative Pre-trained Transformer)** models are pre-trained language models that use:
    A) A Transformer encoder.
    B) A Transformer decoder.
    C) A standard RNN.
    D) A GAN.

    Correct Answer: B
1769. **Zero-shot Learning** in NLP refers to:
    A) Training a model on a very large dataset.
    B) A model's ability to perform a task it was not explicitly trained on, based on its general understanding of language.
    C) Training a model with zero data.
    D) Training a model with a single example.

    Correct Answer: B
1770. **Few-shot Learning** in NLP refers to:
    A) Training a model on a very large dataset.
    B) A model's ability to perform a task after being shown only a small number of examples.
    C) Training a model with zero data.
    D) Training a model with a single example.

    Correct Answer: A
1771. **Generative Models** (like GANs and VAEs) are primarily used for:
    A) Classification and regression.
    B) Creating new data instances that resemble the training data.
    C) Dimensionality reduction.
    D) Clustering.

    Correct Answer: B
1772. **Discriminative Models** (like Logistic Regression, SVM) are primarily used for:
    A) Creating new data instances.
    B) Classification and regression (modeling the boundary between classes).
    C) Dimensionality reduction.
    D) Clustering.

    Correct Answer: B
1773. **Style Transfer** is an application of generative models that involves:
    A) Generating new images from scratch.
    B) Rendering the content of one image in the artistic style of another image.
    C) Classifying the style of an image.
    D) Detecting objects in an image.

    Correct Answer: B
1774. **Transfer Learning** is most effective when the source task and the target task are:
    A) Completely unrelated.
    B) Closely related.
    C) Both unsupervised.
    D) Both reinforcement learning.

    Correct Answer: B
1775. **Domain Adaptation** is a form of Transfer Learning where:
    A) The source and target tasks are the same, but the data distributions (domains) are different.
    B) The source and target tasks are different.
    C) The model is trained from scratch.
    D) The model is only used for feature extraction.

    Correct Answer: B
1776. **AutoML** can significantly reduce the time spent on:
    A) Data collection.
    B) Model selection and hyperparameter tuning.
    C) Model deployment.
    D) Model monitoring.

    Correct Answer: B
1777. **Grid Search** and **Random Search** are common, but less efficient, methods for:
    A) Feature engineering.
    B) Hyperparameter Optimization (HPO).
    C) Model deployment.
    D) Data cleaning.

    Correct Answer: B
1778. **Time Series Decomposition** separates a time series into which components?
    A) Mean, variance, and standard deviation.
    B) Trend, seasonality, and residual (or noise).
    C) Autoregression and moving average.
    D) Policy and value functions.

    Correct Answer: B
1779. **Seasonality** in a time series refers to:
    A) A long-term increase or decrease in the data.
    B) A pattern that repeats at fixed intervals (e.g., daily, weekly, yearly).
    C) Random fluctuations in the data.
    D) The overall average of the data.

    Correct Answer: B
1780. **Trend** in a time series refers to:
    A) A pattern that repeats at fixed intervals.
    B) A long-term increase or decrease in the data.
    C) Random fluctuations in the data.
    D) The overall average of the data.

    Correct Answer: B
1781. **Exponential Smoothing** models are a class of time series forecasting methods that:
    A) Use autoregression.
    B) Assign exponentially decreasing weights to older observations.
    C) Require the series to be stationary.
    D) Only work for non-seasonal data.

    Correct Answer: B
1782. **SARIMA (Seasonal ARIMA)** is an extension of ARIMA that is used to model:
    A) Only non-stationary data.
    B) Time series data with a seasonal component.
    C) Only stationary data.
    D) Only non-seasonal data.

    Correct Answer: B
1783. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1784. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1785. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1786. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1787. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1788. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1789. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1790. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1791. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1792. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1793. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1794. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1795. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1796. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1797. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1798. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1799. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1800. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1801. In RL, the **Episode** is defined as:
    A) A single step of interaction between the agent and the environment.
    B) A sequence of states, actions, and rewards that starts from a starting state and ends in a terminal state.
    C) The total number of steps taken by the agent.
    D) The immediate reward received.

    Correct Answer: B
1802. The **Return** ($G_t$) in RL is the:
    A) Immediate reward received at time $t$.
    B) Total discounted reward from time $t$ until the end of the episode.
    C) Expected value of the state.
    D) Probability of taking an action.

    Correct Answer: B
1803. **Monte Carlo (MC) Methods** in RL update value estimates based on:
    A) The immediate reward.
    B) The actual return observed at the end of an episode.
    C) The difference between the estimated value of the current state and the estimated value of the next state.
    D) The policy gradient.

    Correct Answer: A
1804. **Model-based** RL algorithms are generally more **sample efficient** than model-free algorithms because:
    A) They use deep neural networks.
    B) They can use the learned model to simulate experience and plan, reducing the need for real-world interaction.
    C) They only work for small state spaces.
    D) They only work for discrete action spaces.

    Correct Answer: B
1805. **Dueling DQN** is an architecture that separates the Q-value into:
    A) A policy and a value function.
    B) A state-value function $V(s)$ and an advantage function $A(s, a)$.
    C) A Generator and a Discriminator.
    D) An Encoder and a Decoder.

    Correct Answer: B
1806. **Prioritized Experience Replay (PER)** improves DQN by:
    A) Sampling transitions uniformly from the replay buffer.
    B) Sampling transitions based on the magnitude of the TD error, prioritizing more "surprising" or informative experiences.
    C) Using a smaller replay buffer.
    D) Using a larger learning rate.

    Correct Answer: B
1807. **Trust Region Policy Optimization (TRPO)** and **PPO** are advanced Policy Gradient methods that aim to:
    A) Maximize the policy change at each step.
    B) Ensure that the new policy is not too far from the old policy, leading to more stable updates.
    C) Only work for discrete action spaces.
    D) Only work for continuous action spaces.

    Correct Answer: B
1808. **Inverse Reinforcement Learning (IRL)** is a technique that aims to:
    A) Train an agent from scratch.
    B) Infer the reward function from expert demonstrations.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1809. **Wasserstein GAN (WGAN)** was introduced to address which common problem in standard GANs?
    A) Mode collapse.
    B) Training instability and vanishing gradients in the Discriminator.
    C) The need for a large dataset.
    D) The slow convergence.

    Correct Answer: B
1810. **Conditional VAEs (CVAEs)** extend VAEs by:
    A) Removing the encoder.
    B) Allowing the generation process to be conditioned on some auxiliary information (e.g., class labels).
    C) Only working for image data.
    D) Only working for text data.

    Correct Answer: B
1811. **Image Captioning** is a task that typically uses which advanced ML architecture?
    A) A standard CNN.
    B) A combination of a CNN (for image feature extraction) and an RNN/Transformer (for sequence generation).
    C) A simple linear model.
    D) A Q-Learning agent.

    Correct Answer: B
1812. **Few-shot Learning** often relies on **Metric Learning** which aims to:
    A) Maximize the distance between all data points.
    B) Learn a distance metric or embedding space where examples of the same class are close and examples of different classes are far apart.
    C) Only work for image data.
    D) Only work for text data.

    Correct Answer: B
1813. **AutoML** tools often use which technique to search the model architecture space?
    A) Random search.
    B) Neural Architecture Search (NAS).
    C) Grid search.
    D) Manual selection.

    Correct Answer: B
1814. **Ensemble Methods** in AutoML combine:
    A) A single model with different hyperparameters.
    B) Multiple models (e.g., different algorithms or architectures) to produce a single, more robust prediction.
    C) Only linear models.
    D) Only deep learning models.

    Correct Answer: A
1815. **Autocorrelation Function (ACF)** in time series analysis measures:
    A) The correlation between the series and its lagged values.
    B) The correlation between two different time series.
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1816. **Partial Autocorrelation Function (PACF)** in time series analysis measures:
    A) The correlation between the series and its lagged values.
    B) The correlation between the series and its lagged values, after removing the linear dependence of the intermediate lags.
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1817. The **ACF** and **PACF** plots are primarily used to determine the order of which components in an ARIMA model?
    A) The Integrated (I) component.
    B) The Autoregressive (AR) and Moving Average (MA) components.
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1818. **Gated Recurrent Units (GRUs)** are a simpler alternative to LSTMs that use:
    A) Three gates (forget, input, output).
    B) Two gates (reset and update).
    C) No gates.
    D) Four gates.

    Correct Answer: B
1819. **Bidirectional RNNs** process the input sequence:
    A) Only from left to right.
    B) Both from left to right and from right to left, capturing context from both past and future.
    C) Only from right to left.
    D) Only in a non-sequential manner.

    Correct Answer: B
1820. **Self-Attention** (as used in the Transformer) allows the model to:
    A) Process the sequence sequentially.
    B) Weigh the importance of different words/tokens in the input sequence relative to each other when processing a single token.
    C) Only focus on the immediate past.
    D) Only focus on the immediate future.

    Correct Answer: C
1821. In RL, the **State-Action Value Function** ($Q^\pi(s, a)$) estimates:
    A) The immediate reward from state $s$.
    B) The expected long-term return starting from state $s$, taking action $a$, and thereafter following policy $\pi$.
    C) The probability of taking an action in state $s$.
    D) The total number of steps until the goal is reached.

    Correct Answer: B
1822. **Model-free** RL algorithms are generally more **robust** than model-based algorithms because:
    A) They use deep neural networks.
    B) They do not rely on an explicit model of the environment, which can be inaccurate.
    C) They only work for small state spaces.
    D) They only work for discrete action spaces.

    Correct Answer: B
1823. **Deep Deterministic Policy Gradient (DDPG)** is an off-policy Actor-Critic algorithm designed for:
    A) Discrete action spaces.
    B) Continuous action spaces.
    C) Small state spaces.
    D) Deterministic environments.

    Correct Answer: B
1824. **Soft Actor-Critic (SAC)** is a state-of-the-art DRL algorithm that incorporates:
    A) A simple Q-table.
    B) Entropy maximization into the objective function to encourage exploration.
    C) Only a policy network.
    D) Only a value network.

    Correct Answer: B
1825. **Generative Adversarial Imitation Learning (GAIL)** combines GANs with IRL to:
    A) Train an agent from scratch.
    B) Learn a policy directly from expert demonstrations without explicitly inferring the reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1826. **Latent Space Arithmetic** in VAEs allows for:
    A) Generating random noise.
    B) Meaningful interpolation and manipulation of the generated data (e.g., changing a face's expression).
    C) Calculating the loss function.
    D) Encoding the input data.

    Correct Answer: B
1827. **StyleGAN** is a highly successful GAN architecture known for its ability to:
    A) Generate low-resolution images.
    B) Generate highly realistic and controllable high-resolution images (e.g., human faces).
    C) Only work for text data.
    D) Only work for time series data.

    Correct Answer: B
1828. **Pre-training** in Transfer Learning refers to:
    A) The initial training of a large model on a massive, general-purpose dataset (e.g., ImageNet, a large text corpus).
    B) The final fine-tuning step.
    C) The random initialization of weights.
    D) The deployment of the model.

    Correct Answer: C
1829. **Zero-shot Transfer** in Transfer Learning refers to:
    A) Training a model on a very large dataset.
    B) Applying a pre-trained model to a new task without any further training or fine-tuning.
    C) Training a model with zero data.
    D) Training a model with a single example.

    Correct Answer: B
1830. **AutoML** can be used to automate the selection of:
    A) The entire dataset.
    B) The machine learning algorithm (e.g., Random Forest vs. XGBoost vs. Neural Network).
    C) The deployment environment.
    D) The monitoring metrics.

    Correct Answer: A
1831. **Recurrent Neural Networks (RNNs)** are a class of neural networks that are well-suited for time series data because they:
    A) Treat each data point independently.
    B) Have internal memory (hidden state) that allows them to process sequences of inputs.
    C) Only work for stationary data.
    D) Only work for classification tasks.

    Correct Answer: B
1832. **Long Short-Term Memory (LSTM)** networks are a type of RNN designed to:
    A) Only remember short-term dependencies.
    B) Overcome the vanishing gradient problem and capture long-term dependencies in sequences.
    C) Only work for discrete data.
    D) Only work for image data.

    Correct Answer: B
1833. The **Forget Gate** in an LSTM cell is responsible for:
    A) Deciding which information to add to the cell state.
    B) Deciding which information to throw away from the cell state.
    C) Calculating the output of the cell.
    D) Calculating the hidden state.

    Correct Answer: B
1834. The **Input Gate** in an LSTM cell is responsible for:
    A) Deciding which information to throw away from the cell state.
    B) Deciding which new information to add to the cell state.
    C) Calculating the output of the cell.
    D) Calculating the hidden state.

    Correct Answer: B
1835. The **Output Gate** in an LSTM cell is responsible for:
    A) Deciding which information to throw away from the cell state.
    B) Deciding which new information to add to the cell state.
    C) Determining the value of the next hidden state (output) based on the cell state.
    D) Calculating the cell state.

    Correct Answer: B
1836. In RL, the **Markov Property** states that:
    A) The future is independent of the past given the present state.
    B) The future is dependent on the entire past history.
    C) The reward is always positive.
    D) The policy is always deterministic.

    Correct Answer: B
1837. A **Markov Decision Process (MDP)** is a formal framework for RL that includes:
    A) States, actions, rewards, and a policy.
    B) States, actions, rewards, transition probabilities, and a discount factor.
    C) Only states and actions.
    D) Only rewards and a policy.

    Correct Answer: B
1838. **Value Iteration** and **Policy Iteration** are two classical algorithms for solving:
    A) Supervised learning problems.
    B) MDPs when the environment model (transition probabilities and rewards) is known.
    C) Unsupervised learning problems.
    D) Time series forecasting.

    Correct Answer: B
1839. **Temporal Difference (TD) Learning** is a model-free RL method that updates value estimates based on:
    A) The final return of an episode.
    B) The difference between the estimated value of the current state and the estimated value of the next state (plus the immediate reward).
    C) The immediate reward only.
    D) The policy gradient.

    Correct Answer: B
1840. **Q-Learning** is a form of:
    A) Monte Carlo learning.
    B) Temporal Difference (TD) learning.
    C) Policy gradient learning.
    D) Supervised learning.

    Correct Answer: B
1841. The **Exploding Gradient Problem** in RNNs is typically addressed by:
    A) Using a smaller learning rate.
    B) Gradient clipping (rescaling gradients when they exceed a threshold).
    C) Using a larger batch size.
    D) Using a simpler model.

    Correct Answer: B
1842. **Gated Recurrent Units (GRUs)** are a simpler alternative to LSTMs that use:
    A) Three gates (forget, input, output).
    B) Two gates (reset and update).
    C) No gates.
    D) Four gates.

    Correct Answer: B
1843. **Sequence-to-Sequence (Seq2Seq)** models, often built with RNNs/LSTMs, are used for tasks like:
    A) Image classification.
    B) Machine translation and sequence generation.
    C) Unsupervised clustering.
    D) Time series decomposition.

    Correct Answer: B
1844. **Attention Mechanisms** in sequence models were introduced to:
    A) Speed up training.
    B) Allow the model to selectively focus on the most relevant parts of the input sequence when generating an output.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1845. The **Transformer** architecture, which has largely replaced RNNs/LSTMs in many sequence tasks, relies entirely on:
    A) Recurrent connections.
    B) Convolutional layers.
    C) Attention mechanisms (specifically, multi-head self-attention).
    D) Gated recurrent units.

    Correct Answer: B
1846. **BERT (Bidirectional Encoder Representations from Transformers)** is a pre-trained language model that uses:
    A) A standard RNN.
    B) A Transformer encoder.
    C) A Transformer decoder.
    D) A GAN.

    Correct Answer: B
1847. **GPT (Generative Pre-trained Transformer)** models are pre-trained language models that use:
    A) A Transformer encoder.
    B) A Transformer decoder.
    C) A standard RNN.
    D) A GAN.

    Correct Answer: B
1848. **Zero-shot Learning** in NLP refers to:
    A) Training a model on a very large dataset.
    B) A model's ability to perform a task it was not explicitly trained on, based on its general understanding of language.
    C) Training a model with zero data.
    D) Training a model with a single example.

    Correct Answer: B
1849. **Few-shot Learning** in NLP refers to:
    A) Training a model on a very large dataset.
    B) A model's ability to perform a task after being shown only a small number of examples.
    C) Training a model with zero data.
    D) Training a model with a single example.

    Correct Answer: B
1850. **Generative Models** (like GANs and VAEs) are primarily used for:
    A) Classification and regression.
    B) Creating new data instances that resemble the training data.
    C) Dimensionality reduction.
    D) Clustering.

    Correct Answer: B
1851. **Discriminative Models** (like Logistic Regression, SVM) are primarily used for:
    A) Creating new data instances.
    B) Classification and regression (modeling the boundary between classes).
    C) Dimensionality reduction.
    D) Clustering.

    Correct Answer: B
1852. **Style Transfer** is an application of generative models that involves:
    A) Generating new images from scratch.
    B) Rendering the content of one image in the artistic style of another image.
    C) Classifying the style of an image.
    D) Detecting objects in an image.

    Correct Answer: B
1853. **Transfer Learning** is most effective when the source task and the target task are:
    A) Completely unrelated.
    B) Closely related.
    C) Both unsupervised.
    D) Both reinforcement learning.

    Correct Answer: B
1854. **Domain Adaptation** is a form of Transfer Learning where:
    A) The source and target tasks are the same, but the data distributions (domains) are different.
    B) The source and target tasks are different.
    C) The model is trained from scratch.
    D) The model is only used for feature extraction.

    Correct Answer: B
1855. **AutoML** can significantly reduce the time spent on:
    A) Data collection.
    B) Model selection and hyperparameter tuning.
    C) Model deployment.
    D) Model monitoring.

    Correct Answer: B
1856. **Grid Search** and **Random Search** are common, but less efficient, methods for:
    A) Feature engineering.
    B) Hyperparameter Optimization (HPO).
    C) Model deployment.
    D) Data cleaning.

    Correct Answer: B
1857. **Time Series Decomposition** separates a time series into which components?
    A) Mean, variance, and standard deviation.
    B) Trend, seasonality, and residual (or noise).
    C) Autoregression and moving average.
    D) Policy and value functions.

    Correct Answer: B
1858. **Seasonality** in a time series refers to:
    A) A long-term increase or decrease in the data.
    B) A pattern that repeats at fixed intervals (e.g., daily, weekly, yearly).
    C) Random fluctuations in the data.
    D) The overall average of the data.

    Correct Answer: B
1859. **Trend** in a time series refers to:
    A) A pattern that repeats at fixed intervals.
    B) A long-term increase or decrease in the data.
    C) Random fluctuations in the data.
    D) The overall average of the data.

    Correct Answer: B
1860. **Exponential Smoothing** models are a class of time series forecasting methods that:
    A) Use autoregression.
    B) Assign exponentially decreasing weights to older observations.
    C) Require the series to be stationary.
    D) Only work for non-seasonal data.

    Correct Answer: B
1861. **SARIMA (Seasonal ARIMA)** is an extension of ARIMA that is used to model:
    A) Only non-stationary data.
    B) Time series data with a seasonal component.
    C) Only stationary data.
    D) Only non-seasonal data.

    Correct Answer: B
1862. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1863. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1864. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1865. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1866. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1867. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1868. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1869. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1870. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1871. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1872. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1873. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1874. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1875. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1876. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1877. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1878. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1879. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1880. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1881. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1882. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1883. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1884. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1885. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1886. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1887. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1888. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1889. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1890. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1891. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1892. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1893. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1894. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1895. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1896. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1897. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1898. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1899. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1900. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1901. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1902. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1903. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1904. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1905. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1906. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1907. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1908. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1909. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1910. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1911. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1912. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1913. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1914. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1915. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1916. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1917. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1918. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1919. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1920. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1921. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1922. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1923. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1924. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1925. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1926. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1927. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1928. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1929. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1930. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1931. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1932. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1933. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1934. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1935. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1936. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1937. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1938. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1939. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1940. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1941. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1942. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1943. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1944. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1945. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1946. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1947. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1948. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1949. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1950. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1951. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1952. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1953. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1954. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1955. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1956. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1957. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1958. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1959. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1960. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1961. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1962. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1963. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1964. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1965. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1966. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1967. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1968. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1969. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1970. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1971. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1972. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1973. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1974. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1975. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1976. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

    Correct Answer: B
1977. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

    Correct Answer: B
1978. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

    Correct Answer: B
1979. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

    Correct Answer: B
1980. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

    Correct Answer: B
1981. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

    Correct Answer: B
1982. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

    Correct Answer: B
1983. **Meta-Learning (Learning to Learn)** is a field that aims to:
    A) Train a model to perform a specific task.
    B) Train a model to quickly adapt or learn new tasks with minimal data.
    C) Only focus on hyperparameter tuning.
    D) Only focus on feature engineering.

    Correct Answer: B
1984. **Automated Feature Engineering** is a component of AutoML that focuses on:
    A) Selecting the best model architecture.
    B) Automatically creating new, more informative features from the raw data.
    C) Automating the deployment process.
    D) Automating the monitoring process.

    Correct Answer: B
1985. **Seasonal Decomposition of Time Series by Loess (STL)** is a method for:
    A) Forecasting time series.
    B) Decomposing a time series into trend, seasonal, and residual components.
    C) Training an RNN.
    D) Training an ARIMA model.

    Correct Answer: B
1986. **Exogenous Variables** in time series forecasting are:
    A) Variables that are internal to the time series.
    B) External variables that influence the time series and are included in the model (e.g., weather, price changes).
    C) The trend component.
    D) The seasonal component.

    Correct Answer: B
1987. **Holt-Winters** is an Exponential Smoothing method that can handle:
    A) Only non-seasonal data.
    B) Both trend and seasonality.
    C) Only stationary data.
    D) Only non-stationary data.

    Correct Answer: B
1988. **Encoder-Decoder** architectures, often used in Seq2Seq models, are composed of:
    A) Two separate Q-networks.
    B) Two RNNs/LSTMs: one to encode the input sequence into a context vector, and one to decode the context vector into an output sequence.
    C) A Generator and a Discriminator.
    D) A Policy and a Value network.

    Correct Answer: B
1989. The **Context Vector** in a standard Encoder-Decoder model represents:
    A) The immediate reward.
    B) A fixed-size summary of the entire input sequence.
    C) The next action.
    D) The hidden state of the decoder.

    Correct Answer: B
1990. **Beam Search** is a search algorithm often used in sequence generation (e.g., machine translation) to:
    A) Find the single most likely output sequence.
    B) Find the most likely output sequence by keeping track of the $k$ most promising partial hypotheses at each step.
    C) Only work for short sequences.
    D) Only work for long sequences.

    Correct Answer: B
1991. **Reinforcement Learning** is distinct from Supervised and Unsupervised Learning because:
    A) It uses labeled data.
    B) It involves an agent interacting with an environment to maximize a cumulative reward signal.
    C) It only uses unlabeled data.
    D) It focuses on finding hidden patterns in data.

    Correct Answer: B
1992. The **Optimal Policy** ($\pi^*$) in RL is the policy that:
    A) Minimizes the immediate reward.
    B) Maximizes the expected long-term return from all states.
    C) Only maximizes the immediate reward.
    D) Only works for deterministic environments.

    Correct Answer: B
1993. **Model-based** RL algorithms are those that:
    A) Do not require a model of the environment.
    B) Learn or use a model of the environment's transition dynamics and reward function.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

1994. **Model-free** RL algorithms are those that:
    A) Learn or use a model of the environment.
    B) Do not explicitly learn or use a model of the environment's transition dynamics.
    C) Only work for continuous action spaces.
    D) Only work for discrete action spaces.

1995. **Deep Reinforcement Learning (DRL)** combines RL with:
    A) Classical statistics.
    B) Deep Neural Networks.
    C) Linear regression.
    D) Decision trees.

1996. **Proximal Policy Optimization (PPO)** is a popular Policy Gradient algorithm known for its:
    A) Simplicity and on-policy nature.
    B) Sample efficiency and stable updates by constraining the policy change at each step.
    C) Off-policy nature.
    D) Use of a simple Q-table.

1997. **Conditional GANs (CGANs)** extend GANs by:
    A) Adding a third network.
    B) Conditioning the generation process on some auxiliary information (e.g., class labels).
    C) Removing the Discriminator.
    D) Only working for image data.

1998. **CycleGAN** is a type of GAN used for:
    A) Generating new images from scratch.
    B) Unpaired image-to-image translation (e.g., turning a photo into a painting style).
    C) Image classification.
    D) Object detection.

1999. The **Reparameterization Trick** is a technique used in VAEs to:
    A) Increase the model's size.
    B) Allow gradients to flow through the sampling process from the latent space.
    C) Reduce the model's size.
    D) Solve the vanishing gradient problem.

2000. **One-shot Learning** is an extreme case of Transfer Learning where:
    A) The model is trained on a very large dataset.
    B) The model must learn to recognize new classes after seeing only a single example of each.
    C) The model is trained with zero data.
    D) The model is trained with a small number of examples.

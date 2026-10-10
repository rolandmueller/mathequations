# k-Fold Cross-Validation

## Equation

$$
\mark[cv]{\mathrm{CV}_{(k)}} = \mark[norm]{\frac{1}{k}} \mark[sum]{\sum_{i=1}^{k}} \mark[fold]{\mathrm{MSE}_i}
$$

## Description

[Cross-validation]{.cv} estimates the test error without a separate test set. Split the data into k folds; [for each fold]{.sum}, train on the other k − 1 folds and compute the [error on the held-out fold]{.fold}. Then [average the k errors]{.norm}. Every observation is used for testing exactly once.

Read aloud: [C V sub k]{.cv} equals [one over k]{.norm} times [the sum from i equals one to k]{.sum} of [M S E sub i]{.fold}.

## .cv

Cross-validation estimate $\mathrm{CV}_{(k)}$.

Pronounced: "C V sub k".

Used to compare models and to choose tuning parameters such as polynomial degree, $K$ in KNN, or $\lambda$ in ridge and lasso: pick the setting with the lowest CV error. `sklearn.model_selection.cross_val_score(model, X, y, cv=5)`.

Any preprocessing that learns from data (scaling, feature selection) must happen inside each fold, otherwise information leaks from the held-out fold. A `Pipeline` takes care of this.

## .norm

Normalization $\frac{1}{k}$.

Pronounced: "one over k".

$k = 5$ or $k = 10$ are the usual choices. $k = n$ is leave-one-out cross-validation (LOOCV): nearly unbiased but expensive and higher variance.

## .sum

Summation over folds $\sum_{i=1}^{k}$.

Pronounced: "the sum from i equals one to k".

Here $i$ counts folds, not observations.

## .fold

Held-out error $\mathrm{MSE}_i$.

Pronounced: "M S E sub i".

The mean squared error on fold $i$ of a model trained without fold $i$. For classification, use the error rate or another metric instead. The spread of the $k$ values hints at how uncertain the CV estimate is.

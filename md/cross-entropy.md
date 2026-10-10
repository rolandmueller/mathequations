# Cross-Entropy Loss

## Equation

$$
\mark[loss]{L} = -\mark[norm]{\frac{1}{n}} \mark[sum]{\sum_{i=1}^{n}} \mark[sumk]{\sum_{k=1}^{K}} \mark[y]{y_{ik}} \, \mark[log]{\log} \mark[p]{\hat{p}_{ik}}
$$

## Description

Cross-entropy is the standard loss for classification. [For each observation]{.sum}, only the [true class]{.y} counts, and we [take the log]{.log} of the [probability the model gave it]{.p}. Confident correct predictions cost almost nothing; confident wrong ones cost a lot. The [loss]{.loss} is the negative of these logs, [averaged]{.norm} over observations and [summed over classes]{.sumk}.

Read aloud: [L]{.loss} equals minus [one over n]{.norm} times [the sum over i]{.sum} [and the sum over k]{.sumk} of [y i k]{.y} times [the log]{.log} of [p hat i k]{.p}.

## .loss

Cross-entropy, or log loss $L$.

Pronounced: "L", or "the cross-entropy".

Minimizing it is the same as maximizing the likelihood, so it is the loss behind logistic regression too. With two classes it becomes $-\frac{1}{n}\sum_i \big[ y_i \log \hat{p}_i + (1 - y_i) \log(1 - \hat{p}_i) \big]$ (`binary_crossentropy` in keras); with $K$ classes, `categorical_crossentropy`, or `sparse_categorical_crossentropy` for integer labels. `sklearn.metrics.log_loss`.

## .norm

Normalization $\frac{1}{n}$.

Pronounced: "one over n".

## .sum

Summation over observations $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .sumk

Summation over classes $\sum_{k=1}^{K}$.

Pronounced: "the sum from k equals one to K".

## .y

One-hot label $y_{ik}$.

Pronounced: "y i k".

1 if observation $i$ belongs to class $k$, otherwise 0. So the inner sum just picks out $\log \hat{p}$ of the true class.

## .log

Natural logarithm $\log$.

Pronounced: "log".

$-\log(0.9) \approx 0.1$ but $-\log(0.01) \approx 4.6$: the loss punishes confident mistakes harshly. A model that always outputs $1/K$ scores $\log K$, a useful baseline.

## .p

Predicted probability $\hat{p}_{ik}$.

Pronounced: "p hat i k".

The model's probability that observation $i$ is in class $k$, typically the output of a softmax layer.

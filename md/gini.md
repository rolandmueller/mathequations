# Gini Index

## Equation

$$
\mark[gini]{G_m} = \mark[sum]{\sum_{k=1}^{K}} \mark[pk]{\hat{p}_{mk}} \mark[qk]{\left( 1 - \hat{p}_{mk} \right)}
$$

## Description

A classification tree splits the data so that each leaf is as pure as possible. The [Gini index]{.gini} measures impurity: [for each class]{.sum}, multiply the [share of that class in the node]{.pk} by the [share of everything else]{.qk}. A node containing only one class scores 0.

Read aloud: [G sub m]{.gini} equals [the sum from k equals one to K]{.sum} of [p hat m k]{.pk} times [one minus p hat m k]{.qk}.

## .gini

Gini index of node $m$, $G_m$.

Pronounced: "G sub m", or "the Gini impurity of node m".

At each step the tree tries every predictor and cut point and picks the split that most reduces the size-weighted impurity of the two child nodes. The maximum for two classes is 0.5, at a 50/50 mix.

The alternative is entropy, $H_m = -\sum_k \hat{p}_{mk} \log_2 \hat{p}_{mk}$, which behaves very similarly; the drop in either measure from a split is its information gain (`criterion="entropy"` in `DecisionTreeClassifier`). Error rate is a poor splitting criterion because it is not sensitive enough to changes in node purity.

## .sum

Summation over classes $\sum_{k=1}^{K}$.

Pronounced: "the sum from k equals one to K".

$K$ is the number of classes.

## .pk

Class share $\hat{p}_{mk}$.

Pronounced: "p hat m k".

The fraction of training observations in node $m$ that belong to class $k$. The leaf predicts its most common class, and $\hat{p}_{mk}$ doubles as the predicted probability.

## .qk

$1 - \hat{p}_{mk}$.

Pronounced: "one minus p hat m k".

The share of observations not in class $k$. The product $\hat{p}(1 - \hat{p})$ is the variance of a 0/1 variable, so Gini is a total within-node variance; it is also the probability that two random draws from the node disagree.

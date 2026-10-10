# Entropy (Tree Splitting)

## Equation

$$
\mark[entropy]{H_m} = -\mark[sum]{\sum_{k=1}^{K}} \mark[pk]{\hat{p}_{mk}} \, \mark[log]{\log_2} \mark[pk]{\hat{p}_{mk}}
$$

## Description

[Entropy]{.entropy} measures how mixed up the classes in a tree node are, in bits. [For each class]{.sum}, take its [share in the node]{.pk} and weight it by the [log of that share]{.log}, which is the surprise of drawing that class. A pure node has entropy 0; a 50/50 node with two classes has entropy 1 bit, the maximum.

Read aloud: [H sub m]{.entropy} equals minus [the sum from k equals one to K]{.sum} of [p hat m k]{.pk} times [log base two]{.log} of [p hat m k]{.pk}.

## .entropy

Entropy of node $m$, $H_m$.

Pronounced: "H sub m", or "the entropy of node m". Also written $D_m$ (ISLR).

The average number of yes/no questions needed to identify the class of a random observation from the node. With $K$ classes the maximum is $\log_2 K$, reached when all classes are equally common.

Trees choose the split with the largest drop in entropy, the information gain. Gini impurity behaves almost identically and is slightly cheaper to compute; in practice they rarely produce different trees. `DecisionTreeClassifier(criterion="entropy")`.

## .sum

Summation over classes $\sum_{k=1}^{K}$.

Pronounced: "the sum from k equals one to K".

$K$ is the number of classes. Classes absent from the node contribute 0, by the convention $0 \cdot \log 0 = 0$.

## .pk

Class share $\hat{p}_{mk}$.

Pronounced: "p hat m k".

The fraction of training observations in node $m$ that belong to class $k$.

## .log

Base-2 logarithm $\log_2$.

Pronounced: "log base two".

$-\log_2 \hat{p}$ is the surprise of seeing class $k$: 0 bits if it is certain ($\hat{p} = 1$), 1 bit for a coin flip, 3 bits for a 1-in-8 chance. Since $\hat{p} \le 1$, the log is negative or zero, so the leading minus sign makes entropy non-negative. The base only sets the unit (bits for base 2, nats for $\ln$) and never changes which split wins.

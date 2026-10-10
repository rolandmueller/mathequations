# K-Nearest Neighbors Classifier

## Equation

$$
\mark[prob]{\Pr(Y = j \mid X = x_0)} = \mark[norm]{\frac{1}{K}} \mark[sum]{\sum_{i \in \mathcal{N}_0}} \mark[ind]{I}(\mark[label]{y_i} = \mark[class]{j})
$$

## Description

To classify a new point, KNN looks at its K closest training points and lets them vote. The [estimated probability of class j]{.prob} is the [fraction]{.norm} of those [neighbors]{.sum} whose [label]{.label} [equals]{.ind} [j]{.class}. The prediction is the class with the most votes.

Read aloud: [the probability that Y equals j given X equals x zero]{.prob} equals [one over K]{.norm} times [the sum over i in N zero]{.sum} of [the indicator]{.ind} that [y sub i]{.label} equals [j]{.class}.

## .prob

Estimated class probability $\Pr(Y = j \mid X = x_0)$.

Pronounced: "the probability that Y equals j given X equals x zero".

$x_0$ is the point we want to classify. KNN fits no parameters; it memorizes the training data and does all the work at prediction time.

## .norm

Normalization $\frac{1}{K}$.

Pronounced: "one over K".

$K$ is the number of neighbors, a tuning parameter chosen by cross-validation. $K = 1$ gives a jagged, overfitting boundary (low bias, high variance); a large $K$ gives a smooth, possibly too simple one.

## .sum

Sum over the neighborhood $\sum_{i \in \mathcal{N}_0}$.

Pronounced: "the sum over i in N zero".

$\mathcal{N}_0$ is the set of the $K$ training points nearest to $x_0$, usually by Euclidean distance. Because distance mixes all features, scale them first (`StandardScaler`); otherwise the feature with the largest unit dominates. In high dimensions "nearest" neighbors are far away (the curse of dimensionality).

## .ind

Indicator function $I(\cdot)$.

Pronounced: "the indicator that".

1 if the neighbor's label is $j$, otherwise 0.

## .label

Label of neighbor $i$, $y_i$.

Pronounced: "y sub i".

## .class

Class $j$.

Pronounced: "j".

One of the possible categories. For regression, KNN averages the neighbors' $y_i$ values instead of counting votes.

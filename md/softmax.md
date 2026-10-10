# Softmax (Multinomial Logistic Regression)

## Equation

$$
\mark[p]{\Pr(Y = k \mid X = x)} = \frac{\mark[exp]{e}^{\mark[score]{z_k}}}{\mark[sum]{\sum_{l=1}^{K}} \mark[exp]{e}^{\mark[scores]{z_l}}}
$$

## Description

With more than two classes, each class gets its own linear [score]{.score}. The softmax [exponentiates]{.exp} each score to make it positive and divides by the [sum over all classes]{.sum} of the [exponentiated scores]{.scores}, so the [class probabilities]{.p} are positive and add up to 1.

Read aloud: [the probability that Y equals k given x]{.p} equals [e]{.exp} to the [z k]{.score}, over [the sum from l equals one to K]{.sum} of [e]{.exp} to the [z l]{.scores}.

## .p

Class probability $\Pr(Y = k \mid X = x)$.

Pronounced: "the probability that Y equals k given X equals x".

Predict the class with the highest probability. With $K = 2$ classes softmax reduces to the logistic function. It is also the standard output layer of a classification neural network (`activation="softmax"` in keras).

## .exp

Exponential $e^{(\cdot)}$.

Pronounced: "e to the".

Makes every score positive and exaggerates differences: the largest score gets most of the probability, hence "soft max". In code, subtract the largest score from all of them first to avoid overflow; the result is unchanged.

## .score

Score of class $k$, $z_k$.

Pronounced: "z k".

A linear function of the predictors, $z_k = \beta_{k0} + \beta_{k1} x_1 + \dots + \beta_{kp} x_p$, with separate coefficients for every class. Only differences between scores matter, so one class can serve as the baseline.

## .sum

Sum over all classes $\sum_{l=1}^{K}$.

Pronounced: "the sum from l equals one to K".

$K$ is the number of classes.

## .scores

Score of class $l$, $z_l$.

Pronounced: "z l".

The running index $l$ visits every class, including $k$ itself.

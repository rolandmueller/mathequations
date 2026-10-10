# Likelihood of Logistic Regression

## Equation

$$
\mark[lik]{\ell(\beta_0, \beta_1)} = \mark[pos]{\prod_{i:\, y_i = 1}} \mark[p]{p(x_i)} \; \mark[neg]{\prod_{i':\, y_{i'} = 0}} \mark[q]{\big( 1 - p(x_{i'}) \big)}
$$

## Description

How are logistic regression coefficients found? Not by least squares but by maximum likelihood. The [likelihood]{.lik} is the probability the model assigns to the observed labels: [for every case that is a 1]{.pos}, the [predicted probability of a 1]{.p}, and [for every case that is a 0]{.neg}, the [predicted probability of a 0]{.q}, all multiplied together. The coefficients that make this as large as possible are the estimates.

Read aloud: [l of beta zero and beta one]{.lik} equals [the product over all i with y i equal to one]{.pos} of [p of x i]{.p}, times [the product over all i prime with y i prime equal to zero]{.neg} of [one minus p of x i prime]{.q}.

## .lik

Likelihood function $\ell(\beta_0, \beta_1)$.

Pronounced: "l of beta zero and beta one".

A function of the coefficients, with the data held fixed (ISLR 4.3.2). In practice one maximizes its logarithm, which turns the product into a sum; the negative log-likelihood divided by $n$ is exactly the log loss (binary cross-entropy). There is no closed-form solution, so it is solved iteratively.

If the classes can be separated perfectly, the likelihood keeps increasing as the coefficients grow without bound; regularization (the default in scikit-learn) prevents this.

## .pos

Product over positive cases $\prod_{i:\, y_i = 1}$.

Pronounced: "the product over all i with y i equal to one".

$\prod$ (capital pi) multiplies, as $\sum$ adds. Independence of the observations is what allows multiplying.

## .p

Predicted probability $p(x_i)$.

Pronounced: "p of x i".

Given by the logistic function of $\beta_0 + \beta_1 x_i$.

## .neg

Product over negative cases $\prod_{i':\, y_{i'} = 0}$.

Pronounced: "the product over all i prime with y i prime equal to zero".

## .q

$1 - p(x_{i'})$.

Pronounced: "one minus p of x i prime".

The predicted probability of the observed 0.

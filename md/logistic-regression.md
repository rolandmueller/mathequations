# Logistic Regression

## Equation

$$
\mark[p]{p(X)} = \frac{1}{1 + \mark[exp]{e}^{-(\mark[b0]{\beta_0} + \mark[b1]{\beta_1} \mark[x]{X})}}
$$

## Description

Logistic regression models the [probability of the positive class]{.p} for a binary outcome. A linear score made of an [intercept]{.b0} plus a [slope]{.b1} times the [predictor]{.x} can be any number; the S-shaped logistic function built from the [exponential]{.exp} squeezes it into the range between 0 and 1.

Read aloud: [p of X]{.p} equals one over one plus [e]{.exp} to the minus [beta zero]{.b0} plus [beta one]{.b1} [X]{.x}.

## .p

Predicted probability $p(X) = \Pr(Y = 1 \mid X)$.

Pronounced: "p of X".

Classify as positive if $p(X) > 0.5$, or another threshold chosen according to the cost of false positives and false negatives. The equivalent linear form is $\log\frac{p(X)}{1 - p(X)} = \beta_0 + \beta_1 X$: the log-odds ("logit") are linear in $X$.

Fitted by maximum likelihood (minimizing log loss), not least squares. `sklearn.linear_model.LogisticRegression` applies L2 regularization by default.

## .exp

Euler's number $e \approx 2.718$.

Pronounced: "e".

The function $\sigma(z) = \frac{1}{1 + e^{-z}}$ is the logistic or sigmoid function. It equals 0.5 at $z = 0$ and approaches 0 and 1 in the tails. The same function is a classic activation in neural networks.

## .b0

Intercept $\beta_0$.

Pronounced: "beta zero".

The log-odds of the positive class when $X = 0$.

## .b1

Slope $\beta_1$.

Pronounced: "beta one".

A one-unit increase in $X$ adds $\beta_1$ to the log-odds, i.e. multiplies the odds by $e^{\beta_1}$ (the odds ratio). The change in probability itself depends on where you are on the S-curve: largest near $p = 0.5$, tiny near 0 or 1.

## .x

Predictor $X$.

Pronounced: "X".

With several predictors the exponent becomes $\beta_0 + \beta_1 X_1 + \dots + \beta_p X_p$.

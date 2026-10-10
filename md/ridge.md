# Ridge Regression

## Equation

$$
\mark[min]{\underset{\beta}{\text{minimize}}} \; \mark[rss]{\sum_{i=1}^{n} \Big( y_i - \beta_0 - \sum_{j=1}^{p} \beta_j x_{ij} \Big)^2} + \mark[lambda]{\lambda} \mark[penalty]{\sum_{j=1}^{p} \beta_j^2}
$$

## Description

Ridge regression [chooses the coefficients]{.min} that balance two goals: fit the data well, measured by the [residual sum of squares]{.rss}, and keep the coefficients small, measured by the [sum of their squares]{.penalty}. The [tuning parameter lambda]{.lambda} sets the exchange rate between the two. Shrinking coefficients adds a little bias but can cut variance a lot.

Read aloud: [minimize over beta]{.min} [the residual sum of squares]{.rss} plus [lambda]{.lambda} times [the sum from j equals one to p of beta j squared]{.penalty}.

## .min

Minimization over the coefficients.

Pronounced: "minimize over beta".

The solution has a closed form and is unique even with more predictors than observations or with collinear predictors, where ordinary least squares breaks down.

## .rss

Residual sum of squares.

Pronounced: "the residual sum of squares".

The ordinary least squares loss. On its own, minimizing it gives the OLS coefficients.

## .lambda

Tuning parameter $\lambda \ge 0$.

Pronounced: "lambda".

$\lambda = 0$ gives OLS; $\lambda \to \infty$ shrinks every slope toward 0. Choose it by cross-validation (`RidgeCV`). scikit-learn calls it `alpha`. In neural networks the same penalty is called weight decay (`kernel_regularizer=regularizers.l2(...)` in keras).

## .penalty

L2 penalty $\sum_{j=1}^{p} \beta_j^2$.

Pronounced: "the sum from j equals one to p of beta j squared". Also written $\lVert \beta \rVert_2^2$, "the squared L2 norm of beta".

Shrinks all coefficients smoothly toward zero but never exactly to zero, so every predictor stays in the model. The intercept $\beta_0$ is not penalized. Because the penalty compares coefficient sizes, standardize the predictors first; otherwise the units decide which coefficients get shrunk.

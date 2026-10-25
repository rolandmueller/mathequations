# Bias–Variance Decomposition

## Equation

$$
\begin{aligned}
\mark[err]{E\!\left[ \left( y_0 - \hat{f}(x_0) \right)^2 \right]} &= \mark[var]{\mathrm{Var}\!\left( \hat{f}(x_0) \right)} \\[4pt]
&\quad + \mark[bias]{\left[ \mathrm{Bias}\!\left( \hat{f}(x_0) \right) \right]^2} \\[4pt]
&\quad + \mark[noise]{\mathrm{Var}(\varepsilon)}
\end{aligned}
$$

## Description

The [expected test error]{.err} at a new point splits into three parts. [Variance]{.var}: how much the fitted model would change if trained on a different sample. [Squared bias]{.bias}: how far the average fitted model is from the truth. [Irreducible noise]{.noise}: randomness no model can predict. Flexible models have low bias but high variance; rigid models the reverse. The best model balances the two.

Read aloud: [the expected value of y zero minus f hat of x zero, squared]{.err}, equals [the variance of f hat of x zero]{.var} plus [the squared bias of f hat of x zero]{.bias} plus [the variance of epsilon]{.noise}.

## .err

Expected test MSE at $x_0$.

Pronounced: "the expected value of y zero minus f hat of x zero, squared".

$(x_0, y_0)$ is a new test point. The expectation averages over many possible training sets and over the noise in $y_0$.

## .var

Variance of the fit $\mathrm{Var}(\hat{f}(x_0))$.

Pronounced: "the variance of f hat of x zero".

High for flexible models: a deep tree or KNN with $K = 1$ changes a lot with each new training sample. Reduced by more data, regularization, or averaging many models (bagging).

## .bias

Squared bias $[\mathrm{Bias}(\hat{f}(x_0))]^2$.

Pronounced: "the squared bias of f hat of x zero".

$\mathrm{Bias} = E[\hat{f}(x_0)] - f(x_0)$: systematic error from a model that is too simple, e.g. a straight line fitted to a curve. More data does not remove it; more flexibility does.

## .noise

Irreducible error $\mathrm{Var}(\varepsilon)$.

Pronounced: "the variance of epsilon".

A floor on the test error. Even the true $f$ would make these mistakes, because $Y$ depends on things not in $X$.

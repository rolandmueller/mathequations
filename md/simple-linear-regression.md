# Simple Linear Regression

## Equation

$$
\mark[y]{Y} = \mark[b0]{\beta_0} + \mark[b1]{\beta_1} \mark[x]{X} + \mark[eps]{\varepsilon}
$$

## Description

Linear regression models a [response]{.y} as a straight-line function of a [predictor]{.x}: a [starting value]{.b0} plus a [slope]{.b1} times the predictor, plus an [error term]{.eps} for everything the line does not capture.

Read aloud: [Y]{.y} equals [beta zero]{.b0} plus [beta one]{.b1} times [X]{.x} plus [epsilon]{.eps}.

## .y

Response $Y$.

Pronounced: "Y". Also called the outcome, target, or dependent variable.

The quantity we want to predict or explain, e.g. sales.

## .b0

Intercept $\beta_0$.

Pronounced: "beta zero", or "beta naught".

The expected value of $Y$ when $X = 0$. Often not meaningful by itself (nobody has height 0), but needed to place the line.

## .b1

Slope $\beta_1$.

Pronounced: "beta one".

The expected change in $Y$ for a one-unit increase in $X$. It describes association; reading it as "the effect of $X$" requires that no confounder drives both. Estimated by least squares as $\hat{\beta}_1$.

## .x

Predictor $X$.

Pronounced: "X". Also called the feature, input, or independent variable.

E.g. TV advertising budget.

## .eps

Error term $\varepsilon$.

Pronounced: "epsilon".

Everything the line misses: omitted variables, measurement error, randomness. Standard inference assumes errors are independent with mean 0 and constant variance $\sigma^2$. The observed estimates of $\varepsilon$ are the residuals $y_i - \hat{y}_i$.

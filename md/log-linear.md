# Log-Linear Regression

## Equation

$$
\mark[logy]{\log(Y)} = \mark[b0]{\beta_0} + \mark[b1]{\beta_1} \mark[x]{X} + \mark[eps]{\varepsilon}
$$

## Description

Taking the [logarithm of the response]{.logy} turns multiplicative relationships into additive ones. Now the [slope]{.b1} describes a percentage change: each extra unit of the [predictor]{.x} multiplies Y by a constant factor. The [intercept]{.b0} and [error term]{.eps} also live on the log scale.

Read aloud: [log of Y]{.logy} equals [beta zero]{.b0} plus [beta one]{.b1} times [X]{.x} plus [epsilon]{.eps}.

## .logy

Log-transformed response $\log(Y)$.

Pronounced: "log of Y", or "the natural log of Y".

Useful for right-skewed, strictly positive quantities such as income, prices, or population, whose spread grows with their size. On a log axis, equal distances mean equal ratios, and exponential growth looks like a straight line.

Requires $Y > 0$; `np.log1p` handles zeros as $\log(1 + Y)$. Predictions back-transformed with $e^{\hat{y}}$ estimate the median of $Y$, not its mean.

## .b0

Intercept $\beta_0$.

Pronounced: "beta zero".

$e^{\beta_0}$ is the predicted (median) $Y$ at $X = 0$.

## .b1

Slope $\beta_1$.

Pronounced: "beta one".

A one-unit increase in $X$ multiplies $Y$ by $e^{\beta_1}$. For small values, that is roughly a $100 \cdot \beta_1$ percent change: $\beta_1 = 0.05$ means about +5% per unit. If $X$ is logged too (log-log model), $\beta_1$ is an elasticity: the percent change in $Y$ for a 1% change in $X$.

## .x

Predictor $X$.

Pronounced: "X".

## .eps

Error term $\varepsilon$.

Pronounced: "epsilon".

Additive on the log scale means multiplicative on the original scale: errors are a percentage of $Y$, not a fixed amount.

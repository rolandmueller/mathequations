# Residual Sum of Squares

## Equation

$$
\mark[rss]{\mathrm{RSS}} = \mark[sum]{\sum_{i=1}^{n}} \left( \mark[y]{y_i} - \mark[b0]{\hat{\beta}_0} - \mark[b1]{\hat{\beta}_1} \mark[x]{x_i} \right)^{\mark[square]{2}}
$$

## Description

The [residual sum of squares]{.rss} is the loss function of linear regression. For every [observation]{.sum}, take the [actual response]{.y}, subtract the line's prediction (the [intercept]{.b0} plus the [slope]{.b1} times the [predictor]{.x}), [square]{.square} the gap, and add up. Least squares picks the line that makes this as small as possible.

Read aloud: [R S S]{.rss} equals [the sum from i equals one to n]{.sum} of [y sub i]{.y} minus [beta zero hat]{.b0} minus [beta one hat]{.b1} times [x sub i]{.x}, [squared]{.square}.

## .rss

Residual sum of squares $\mathrm{RSS}$.

Pronounced: "R S S", or "the residual sum of squares".

Each term is a squared residual $e_i^2 = (y_i - \hat{y}_i)^2$. Dividing by $n$ gives the mean squared error; $\sqrt{\mathrm{RSS}/(n-2)}$ is the residual standard error $\hat{\sigma}$, the typical size of a prediction miss.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

Runs over all $n$ data points used to fit the line.

## .y

Observed response $y_i$.

Pronounced: "y sub i".

## .b0

Estimated intercept $\hat{\beta}_0$.

Pronounced: "beta zero hat". The hat marks a value estimated from data.

## .b1

Estimated slope $\hat{\beta}_1$.

Pronounced: "beta one hat".

## .x

Observed predictor $x_i$.

Pronounced: "x sub i".

## .square

Squaring.

Pronounced: "squared".

Squaring makes misses in both directions count and punishes large misses heavily, so least squares is sensitive to outliers. Using absolute values instead (least absolute deviations) gives a line that tracks the conditional median rather than the mean.

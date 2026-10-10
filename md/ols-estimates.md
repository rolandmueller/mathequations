# Least Squares Coefficient Estimates

## Equation

$$
\begin{aligned}
\mark[b1]{\hat{\beta}_1} &= \frac{\mark[sum]{\sum_{i=1}^{n}} \left( \mark[x]{x_i} - \mark[xbar]{\bar{x}} \right) \left( \mark[y]{y_i} - \mark[ybar]{\bar{y}} \right)}{\mark[sum]{\sum_{i=1}^{n}} \left( \mark[x]{x_i} - \mark[xbar]{\bar{x}} \right)^2} \\[8pt]
\mark[b0]{\hat{\beta}_0} &= \mark[ybar]{\bar{y}} - \mark[b1]{\hat{\beta}_1} \mark[xbar]{\bar{x}}
\end{aligned}
$$

## Description

Minimizing the residual sum of squares has a closed-form answer. The [slope]{.b1} is how [x]{.x} and [y]{.y} co-vary around their means [x bar]{.xbar} and [y bar]{.ybar}, divided by how much x varies on its own, both [summed over all observations]{.sum}. The [intercept]{.b0} then makes the line pass through the point of means.

Read aloud: [beta one hat]{.b1} equals [the sum]{.sum} of [x sub i]{.x} minus [x bar]{.xbar} times [y sub i]{.y} minus [y bar]{.ybar}, over [the sum]{.sum} of [x sub i]{.x} minus [x bar]{.xbar} squared. [Beta zero hat]{.b0} equals [y bar]{.ybar} minus [beta one hat]{.b1} times [x bar]{.xbar}.

## .b1

Estimated slope $\hat{\beta}_1$.

Pronounced: "beta one hat".

Equivalent forms: $\hat{\beta}_1 = \frac{s_{xy}}{s_x^2} = r_{xy}\,\frac{s_y}{s_x}$, covariance over variance, or correlation rescaled into units of $y$ per unit of $x$. So the slope is zero exactly when the correlation is zero.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .x

Predictor value $x_i$.

Pronounced: "x sub i".

## .xbar

Mean of the predictor $\bar{x}$.

Pronounced: "x bar".

## .y

Response value $y_i$.

Pronounced: "y sub i".

## .ybar

Mean of the response $\bar{y}$.

Pronounced: "y bar".

## .b0

Estimated intercept $\hat{\beta}_0$.

Pronounced: "beta zero hat".

Rearranged, $\bar{y} = \hat{\beta}_0 + \hat{\beta}_1 \bar{x}$: the least squares line always goes through $(\bar{x}, \bar{y})$.

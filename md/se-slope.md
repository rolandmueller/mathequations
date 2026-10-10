# Standard Error of the Slope

## Equation

$$
\mark[se]{\mathrm{SE}(\hat{\beta}_1)} = \frac{\mark[sigma]{\hat{\sigma}}}{\sqrt{\mark[sum]{\sum_{i=1}^{n}} \left( \mark[x]{x_i} - \mark[xbar]{\bar{x}} \right)^{2}}}
$$

## Description

The [standard error of the slope]{.se} says how much the estimated slope would wobble across repeated samples. It grows with the [noise around the line]{.sigma} and shrinks when the [predictor values]{.x} are [spread widely]{.sum} around [their mean]{.xbar}: a wide range of x pins the line down better.

Read aloud: [the standard error of beta one hat]{.se} equals [sigma hat]{.sigma} over the square root of [the sum from i equals one to n]{.sum} of [x sub i]{.x} minus [x bar]{.xbar}, squared.

## .se

Standard error $\mathrm{SE}(\hat{\beta}_1)$.

Pronounced: "the standard error of beta one hat".

The basis for inference on the slope. The $t$ statistic is $t = \hat{\beta}_1 / \mathrm{SE}(\hat{\beta}_1)$ for $H_0: \beta_1 = 0$, and an approximate 95% confidence interval is $\hat{\beta}_1 \pm 2\,\mathrm{SE}(\hat{\beta}_1)$. This is the "std err" column in a statsmodels summary.

Assumes independent errors with constant variance. Otherwise, use robust (heteroskedasticity-consistent) standard errors or the bootstrap.

## .sigma

Residual standard error $\hat{\sigma}$.

Pronounced: "sigma hat".

$\hat{\sigma} = \sqrt{\mathrm{RSS}/(n-2)}$: the typical vertical distance of points from the line. Two degrees of freedom are used up by estimating $\beta_0$ and $\beta_1$.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

The whole sum equals $(n-1)\,s_x^2$, so the SE shrinks like $1/\sqrt{n}$, the familiar root-n law.

## .x

Predictor value $x_i$.

Pronounced: "x sub i".

## .xbar

Mean of the predictor $\bar{x}$.

Pronounced: "x bar".

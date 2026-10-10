# Residual Standard Error

## Equation

$$
\mark[rse]{\mathrm{RSE}} = \sqrt{\mark[norm]{\frac{1}{n - p - 1}} \, \mark[rss]{\mathrm{RSS}}}
$$

## Description

The [residual standard error]{.rse} is the typical size of a prediction miss, in the units of the response. Take the [residual sum of squares]{.rss}, [average it over the degrees of freedom left after fitting]{.norm}, and take the square root.

Read aloud: [R S E]{.rse} equals the square root of [one over n minus p minus one]{.norm} times [R S S]{.rss}.

## .rse

Residual standard error $\mathrm{RSE}$.

Pronounced: "R S E".

An estimate of $\sigma$, the standard deviation of the error term $\varepsilon$. It measures lack of fit in absolute terms, while $R^2$ measures it relative to the total variation (ISLR 3.1.3). Dividing RSE by the mean response gives a rough percentage error.

Even the true regression line would miss by about $\sigma$; RSE is the noise level no straight line can remove.

## .norm

Normalization $\frac{1}{n - p - 1}$.

Pronounced: "one over n minus p minus one".

$p$ is the number of predictors; one more degree of freedom goes to the intercept. In simple regression ($p = 1$) this is $\frac{1}{n-2}$. Dividing by the degrees of freedom instead of $n$ corrects for the fact that the line was fitted to the same data, just as $n - 1$ does for the sample variance.

## .rss

Residual sum of squares $\mathrm{RSS}$.

Pronounced: "R S S".

The sum of squared residuals $\sum_i (y_i - \hat{y}_i)^2$.

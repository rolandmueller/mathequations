# F-Statistic for Regression

## Equation

$$
\mark[f]{F} = \frac{\mark[explained]{(\mathrm{TSS} - \mathrm{RSS})} \, / \, \mark[p]{p}}{\mark[rss]{\mathrm{RSS}} \, / \, \mark[df]{(n - p - 1)}}
$$

## Description

Does the model as a whole explain anything? The [F-statistic]{.f} compares the [variation the model explains]{.explained}, per [predictor]{.p}, with the [variation it leaves unexplained]{.rss}, per [remaining degree of freedom]{.df}. If no predictor matters, both are estimates of the same noise and F is near 1; a large F says at least one predictor is related to the response.

Read aloud: [F]{.f} equals [T S S minus R S S]{.explained} over [p]{.p}, divided by [R S S]{.rss} over [n minus p minus one]{.df}.

## .f

F-statistic $F$.

Pronounced: "F".

Tests $H_0: \beta_1 = \beta_2 = \dots = \beta_p = 0$ against "at least one $\beta_j \ne 0$" (ISLR 3.2.2). Under $H_0$ it follows an F distribution with $p$ and $n - p - 1$ degrees of freedom. Shown at the top of a statsmodels summary.

Why not just look at the individual p-values? With 100 useless predictors, about 5 will look significant at the 5% level by chance. The F-test controls this for the model as a whole.

## .explained

Explained sum of squares $\mathrm{TSS} - \mathrm{RSS}$.

Pronounced: "T S S minus R S S".

How much the squared error drops from the mean-only model to the fitted model.

## .p

Number of predictors $p$.

Pronounced: "p".

## .rss

Residual sum of squares $\mathrm{RSS}$.

Pronounced: "R S S".

## .df

Residual degrees of freedom $n - p - 1$.

Pronounced: "n minus p minus one".

$\mathrm{RSS}/(n - p - 1)$ is the squared residual standard error, the estimate of $\sigma^2$. A variant compares two nested models to test whether a subset of $q$ predictors can be dropped.

# t-Test for a Regression Coefficient

## Equation

$$
\mark[t]{t} = \frac{\mark[b1]{\hat{\beta}_1} - \mark[null]{0}}{\mark[se]{\mathrm{SE}(\hat{\beta}_1)}}
$$

## Description

Is there any relationship between X and Y at all? The [t-statistic]{.t} measures how many standard errors the [estimated slope]{.b1} lies away from [zero]{.null}, the value it would have if X had no association with Y. The [standard error]{.se} sets the scale: a slope of 0.5 is impressive if its standard error is 0.05 and meaningless if it is 1.

Read aloud: [t]{.t} equals [beta one hat]{.b1} minus [zero]{.null}, over [the standard error of beta one hat]{.se}.

## .t

t-statistic $t$.

Pronounced: "t".

Under $H_0$ it follows a $t$ distribution with $n - 2$ degrees of freedom; the p-value is the probability of $|t|$ at least this large. These are the "t" and "P>|t|" columns of a statsmodels summary (ISLR 3.1.2).

In multiple regression each coefficient gets its own $t$-test, which asks whether that predictor adds anything given all the others ($df = n - p - 1$).

## .b1

Estimated slope $\hat{\beta}_1$.

Pronounced: "beta one hat".

## .null

Null value $0$.

Pronounced: "zero".

$H_0: \beta_1 = 0$, no linear relationship. Any other hypothesized value can be tested the same way.

## .se

Standard error $\mathrm{SE}(\hat{\beta}_1)$.

Pronounced: "the standard error of beta one hat".

Also gives the approximate 95% confidence interval $\hat{\beta}_1 \pm 2\,\mathrm{SE}(\hat{\beta}_1)$; the test rejects at 5% exactly when that interval excludes 0.

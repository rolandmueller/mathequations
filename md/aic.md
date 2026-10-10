# Akaike Information Criterion

## Equation

$$
\mark[aic]{\mathrm{AIC}} = \mark[fit]{-2 \log \hat{L}} + \mark[penalty]{2d}
$$

## Description

The [AIC]{.aic} scores a model by how well it fits, through the [maximized log-likelihood]{.fit}, plus a [penalty of two per parameter]{.penalty}. Lower is better. It estimates how well the model would predict new data, so it can compare models of different sizes without cross-validation.

Read aloud: [A I C]{.aic} equals [minus two log L hat]{.fit} plus [two d]{.penalty}.

## .aic

Akaike information criterion $\mathrm{AIC}$.

Pronounced: "A I C".

Only differences between models fitted to the same data mean anything; the absolute value does not. Shown as "AIC" in statsmodels summaries.

The relatives: $\mathrm{BIC} = -2 \log \hat{L} + d \log n$ penalizes more heavily once $n > 7$ and so picks smaller models; for least squares, Mallow's $C_p = \frac{1}{n}(\mathrm{RSS} + 2 d \hat{\sigma}^2)$ is equivalent to AIC (ISLR 6.1.3).

## .fit

Fit term $-2 \log \hat{L}$.

Pronounced: "minus two log L hat".

$\hat{L}$ is the likelihood of the data under the fitted model. For linear regression with normal errors this term is, up to constants, $n \log(\mathrm{RSS}/n)$; for logistic regression it is twice the log loss summed over observations (the deviance).

## .penalty

Complexity penalty $2d$.

Pronounced: "two d".

$d$ is the number of estimated parameters. Without this term, the most complex model would always win, just as training error always prefers more flexibility.

# Leverage

## Equation

$$
\mark[h]{h_i} = \mark[base]{\frac{1}{n}} + \frac{\mark[dist]{(x_i - \bar{x})^2}}{\mark[spread]{\sum_{i'=1}^{n} (x_{i'} - \bar{x})^2}}
$$

## Description

Some points pull on the regression line more than others. The [leverage]{.h} of an observation is a [baseline share that every point gets]{.base}, plus its [squared distance from the center of the predictor]{.dist} relative to the [total spread of the predictor]{.spread}. Points with unusual x values can tilt the whole line on their own.

Read aloud: [h i]{.h} equals [one over n]{.base} plus [x i minus x bar, squared]{.dist}, over [the sum of all squared deviations of x]{.spread}.

## .h

Leverage $h_i$.

Pronounced: "h i".

Always between $1/n$ and 1; the average over all observations is $(p + 1)/n$. Values far above that flag high-leverage points (ISLR 3.3.3). With several predictors a point can have high leverage while being unremarkable in every single variable, so compute it (`OLSInfluence(model).hat_matrix_diag` in statsmodels) rather than eyeballing.

Leverage concerns unusual x; an outlier has an unusual y given its x, detected by studentized residuals beyond about ±3. A point that is both is influential: Cook's distance combines the two.

## .base

Baseline $\frac{1}{n}$.

Pronounced: "one over n".

## .dist

Squared distance $(x_i - \bar{x})^2$.

Pronounced: "x i minus x bar, squared".

## .spread

Total spread $\sum (x_{i'} - \bar{x})^2$.

Pronounced: "the sum of all squared deviations of x".

The index $i'$ ("i prime") runs over all observations, so it does not clash with the fixed $i$ in the numerator.

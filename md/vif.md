# Variance Inflation Factor

## Equation

$$
\mark[vif]{\mathrm{VIF}(\hat{\beta}_j)} = \frac{1}{1 - \mark[r2]{R^2_{X_j \mid X_{-j}}}}
$$

## Description

Collinearity: when predictors are strongly related to each other, the model cannot tell their effects apart. The [variance inflation factor]{.vif} measures how much this inflates the variance of a coefficient. It comes from the [R squared of predicting X j from all the other predictors]{.r2}: if the others already explain X j well, there is little independent information left to estimate its coefficient.

Read aloud: [the V I F of beta j hat]{.vif} equals one over one minus [R squared of X j given all other X]{.r2}.

## .vif

Variance inflation factor $\mathrm{VIF}(\hat{\beta}_j)$.

Pronounced: "the V I F of beta j hat".

The ratio of the coefficient's variance in the full model to its variance if $X_j$ were uncorrelated with the others. 1 means no collinearity; above 5 or 10 is a common warning sign (ISLR 3.3.3). The standard error grows by $\sqrt{\mathrm{VIF}}$, so t-statistics shrink and real effects can look insignificant.

Remedies: drop one of the redundant predictors, combine them, or use ridge regression. Predictions are often fine despite collinearity; only the individual coefficients are unstable. `statsmodels.stats.outliers_influence.variance_inflation_factor`.

## .r2

$R^2_{X_j \mid X_{-j}}$.

Pronounced: "R squared of X j given all other X".

The $R^2$ from regressing $X_j$ on all other predictors $X_{-j}$ ("X minus j"). Unlike a correlation matrix, this also catches collinearity among three or more variables where no single pair is highly correlated.

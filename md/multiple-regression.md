# Multiple Linear Regression

## Equation

$$
\mark[y]{Y} = \mark[b0]{\beta_0} + \mark[sum]{\sum_{j=1}^{p}} \mark[beta]{\beta_j} \mark[x]{X_j} + \mark[eps]{\varepsilon}
$$

## Description

Multiple regression predicts the [response]{.y} from [several predictors]{.x} at once: an [intercept]{.b0} plus, [for each of the p predictors]{.sum}, its [own coefficient]{.beta} times its value, plus an [error term]{.eps}. Each coefficient is the association of one predictor with the response while holding all others fixed, which is how regression adjusts for confounders.

Read aloud: [Y]{.y} equals [beta zero]{.b0} plus [the sum from j equals one to p]{.sum} of [beta j]{.beta} times [X j]{.x}, plus [epsilon]{.eps}.

## .y

Response $Y$.

Pronounced: "Y".

## .b0

Intercept $\beta_0$.

Pronounced: "beta zero".

The expected response when every predictor is 0.

## .sum

Summation over predictors $\sum_{j=1}^{p}$.

Pronounced: "the sum from j equals one to p".

$j$ indexes predictors (columns), not observations (rows). $p$ is the number of predictors. Written out: $\beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p$.

## .beta

Coefficient $\beta_j$.

Pronounced: "beta j".

The expected change in $Y$ for a one-unit increase in $X_j$, holding the other predictors constant. This is why a coefficient can change sign when a variable is added: in the beer-and-chips example, the simple slope mixes the effect of one product with that of a correlated one, and adding the confounder separates them.

Strongly correlated predictors (collinearity) make individual coefficients unstable, with large standard errors, even when predictions are fine.

## .x

Predictor $X_j$.

Pronounced: "X j".

Categorical predictors enter as 0/1 dummy variables, one fewer than the number of categories (`pd.get_dummies(..., drop_first=True)`).

## .eps

Error term $\varepsilon$.

Pronounced: "epsilon".

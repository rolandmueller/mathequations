# Interaction Term

## Equation

$$
\mark[y]{Y} = \mark[b0]{\beta_0} + \mark[b1]{\beta_1} \mark[x1]{X_1} + \mark[b2]{\beta_2} \mark[x2]{X_2} + \mark[b3]{\beta_3} \mark[x1]{X_1} \mark[x2]{X_2} + \mark[eps]{\varepsilon}
$$

## Description

An interaction lets the effect of one [predictor]{.x1} depend on the value of [another]{.x2}. Besides the [intercept]{.b0} and the two main effects [beta one]{.b1} and [beta two]{.b2}, the model includes their product with its [own coefficient]{.b3}, plus an [error term]{.eps}. Example: TV advertising pays off more when radio advertising is high too (synergy).

Read aloud: [Y]{.y} equals [beta zero]{.b0} plus [beta one]{.b1} [X one]{.x1} plus [beta two]{.b2} [X two]{.x2} plus [beta three]{.b3} [X one]{.x1} [X two]{.x2}, plus [epsilon]{.eps}.

## .y

Response $Y$.

Pronounced: "Y".

## .b0

Intercept $\beta_0$.

Pronounced: "beta zero".

## .b1

Main effect $\beta_1$.

Pronounced: "beta one".

With an interaction in the model, $\beta_1$ is the slope of $X_1$ only where $X_2 = 0$. Centering the predictors first makes it the slope at the average $X_2$, which is usually easier to interpret.

## .x1

First predictor $X_1$.

Pronounced: "X one".

## .b2

Main effect $\beta_2$.

Pronounced: "beta two".

## .x2

Second predictor $X_2$.

Pronounced: "X two".

## .b3

Interaction coefficient $\beta_3$.

Pronounced: "beta three".

Regrouping shows what it does: $Y = \beta_0 + (\beta_1 + \beta_3 X_2)\,X_1 + \beta_2 X_2 + \varepsilon$. The slope of $X_1$ is no longer a constant but changes by $\beta_3$ for each unit of $X_2$.

Hierarchical principle: if you keep the interaction, keep both main effects too, even if they are not significant. The same trick with $X_1 \cdot X_1 = X_1^2$ adds curvature: a model can be nonlinear in $X$ and still be linear regression, because it is linear in the $\beta$s. In a formula: `smf.ols("y ~ x1 * x2", df)`.

## .eps

Error term $\varepsilon$.

Pronounced: "epsilon".

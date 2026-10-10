# Coefficient of Determination

## Equation

$$
\mark[r2]{R^2} = 1 - \frac{\mark[rss]{\mathrm{RSS}}}{\mark[tss]{\mathrm{TSS}}} = 1 - \frac{\mark[rss]{\sum_i (y_i - \hat{y}_i)^2}}{\mark[tss]{\sum_i (y_i - \bar{y})^2}}
$$

## Description

[R squared]{.r2} measures how much of the variation in the response a model explains. The [total sum of squares]{.tss} is the error of the dumbest model, which always predicts the mean. The [residual sum of squares]{.rss} is the error left after fitting. One minus their ratio is the share of variance the model removes.

Read aloud: [R squared]{.r2} equals one minus [R S S]{.rss} over [T S S]{.tss}.

## .r2

Coefficient of determination $R^2$.

Pronounced: "R squared".

Between 0 and 1 on the training data. In simple linear regression $R^2 = r^2$, the squared correlation. It never decreases when a predictor is added, even a useless one, so on its own it rewards overfitting; adjusted $R^2$ or test-set $R^2$ correct for this. On new data it can be negative, meaning the model is worse than predicting the mean.

A low $R^2$ does not mean a coefficient is unimportant, and a high $R^2$ does not mean the model is causal.

## .rss

Residual sum of squares $\mathrm{RSS}$.

Pronounced: "R S S".

Squared gaps between observed $y_i$ and fitted $\hat{y}_i$ ("y hat i"). What the model fails to explain.

## .tss

Total sum of squares $\mathrm{TSS}$.

Pronounced: "T S S".

Squared gaps between $y_i$ and the mean $\bar{y}$. It equals $(n-1)\,s_y^2$, the total variation before any model is fitted.

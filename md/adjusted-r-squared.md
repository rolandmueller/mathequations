# Adjusted R-Squared

## Equation

$$
\mark[adj]{R^2_{\text{adj}}} = 1 - \frac{\mark[rss]{\mathrm{RSS}} \, / \, \mark[dfres]{(n - d - 1)}}{\mark[tss]{\mathrm{TSS}} \, / \, \mark[dftot]{(n - 1)}}
$$

## Description

Plain R squared always rises when a predictor is added, even pure noise. [Adjusted R squared]{.adj} charges for complexity: it compares the [residual sum of squares]{.rss} per [remaining degree of freedom]{.dfres} with the [total sum of squares]{.tss} per [total degrees of freedom]{.dftot}. An extra predictor raises it only if it reduces RSS by more than the degree of freedom it costs.

Read aloud: [adjusted R squared]{.adj} equals one minus [R S S]{.rss} over [n minus d minus one]{.dfres}, divided by [T S S]{.tss} over [n minus one]{.dftot}.

## .adj

Adjusted $R^2$.

Pronounced: "adjusted R squared".

One of the "other methods" for estimating test error without a test set, along with $C_p$, AIC and BIC (ISLR 6.1.3): they adjust the training error for model size so models of different sizes can be compared. Larger is better. Cross-validation is the more direct alternative and makes fewer assumptions.

## .rss

Residual sum of squares $\mathrm{RSS}$.

Pronounced: "R S S".

## .dfres

Residual degrees of freedom $n - d - 1$.

Pronounced: "n minus d minus one".

$d$ is the number of predictors in the model.

## .tss

Total sum of squares $\mathrm{TSS}$.

Pronounced: "T S S".

## .dftot

Total degrees of freedom $n - 1$.

Pronounced: "n minus one".

# Partial Dependence

## Equation

$$
\mark[pd]{\hat{f}_S(x_S)} = \mark[norm]{\frac{1}{n}} \mark[sum]{\sum_{i=1}^{n}} \mark[model]{\hat{f}}\big( \mark[xs]{x_S}, \mark[xc]{x_C^{(i)}} \big)
$$

## Description

A partial dependence plot shows how a model's prediction changes with one feature, on average. Fix the [feature of interest]{.xs} at a value, keep each observation's [other features]{.xc} as they are, ask the [model]{.model} for a prediction, and [average]{.norm} over [all observations]{.sum}. Repeating this across a grid of values traces the [partial dependence curve]{.pd}.

Read aloud: [f hat S of x S]{.pd} equals [one over n]{.norm} times [the sum from i equals one to n]{.sum} of [f hat]{.model} of [x S]{.xs} and [x C i]{.xc}.

## .pd

Partial dependence function $\hat{f}_S(x_S)$.

Pronounced: "f hat S of x S".

Shows the shape of a relationship (linear, threshold, saturating) that a feature importance number cannot. `sklearn.inspection.PartialDependenceDisplay.from_estimator`.

An average can hide heterogeneity: if the effect is positive for half the data and negative for the other half, the PDP is flat. Individual conditional expectation (ICE) curves draw one line per observation instead of averaging (`kind="both"`).

## .norm

Normalization $\frac{1}{n}$.

Pronounced: "one over n".

## .sum

Summation over observations $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .model

Fitted model $\hat{f}$.

Pronounced: "f hat".

Any model: random forest, gradient boosting, neural network. The PDP explains the model, not the world; it is causal only if the model is.

## .xs

Feature(s) of interest $x_S$.

Pronounced: "x S".

$S$ is usually one feature, or two for a 2D interaction plot. Set to the same grid value for every observation.

## .xc

Remaining features of observation $i$, $x_C^{(i)}$.

Pronounced: "x C i".

$C$ is the complement of $S$. If $x_S$ is correlated with features in $C$, this creates unrealistic combinations (a 2-meter-tall person weighing 40 kg), and the curve may reflect regions with no data. Accumulated local effects (ALE) plots address this.

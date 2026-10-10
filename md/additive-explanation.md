# Additive Feature Attribution (SHAP, Tree Interpreter)

## Equation

$$
\mark[pred]{\hat{f}(x)} = \mark[base]{\phi_0} + \mark[sum]{\sum_{j=1}^{p}} \mark[contrib]{\phi_j}
$$

## Description

Local explanation methods break one [prediction]{.pred} into pieces. Start from a [baseline, the average prediction]{.base}, then [add up]{.sum} one [contribution per feature]{.contrib}, positive or negative. The pieces add up exactly to the prediction, so you can say "€40k above average: +€55k for location, −€15k for age".

Read aloud: [f hat of x]{.pred} equals [phi zero]{.base} plus [the sum from j equals one to p]{.sum} of [phi j]{.contrib}.

## .pred

Prediction for one instance, $\hat{f}(x)$.

Pronounced: "f hat of x".

SHAP force and waterfall plots draw exactly this decomposition (`shap.plots.waterfall`).

## .base

Base value $\phi_0$.

Pronounced: "phi zero".

In SHAP, the average prediction over the background data (`explainer.expected_value`). In the tree interpreter, the "bias": the mean of the training responses at the root node.

## .sum

Sum over features $\sum_{j=1}^{p}$.

Pronounced: "the sum from j equals one to p".

## .contrib

Contribution of feature $j$, $\phi_j$.

Pronounced: "phi j".

Tree interpreter: follow the instance down the tree; each split changes the node mean, and that change is credited to the split's feature. For a forest, average over trees (`treeinterpreter.predict(rf, X)` returns prediction, bias, contributions). Fast, but the credit depends on split order, e.g. which of two interacting features is split first.

SHAP: the Shapley values $\phi_j$, which average over all feature orders and so treat interacting features fairly. `shap.TreeExplainer` computes them exactly for tree models. Averaging $|\phi_j|$ over many instances gives a global importance ranking.

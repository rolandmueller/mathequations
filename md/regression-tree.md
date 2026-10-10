# Regression Tree

## Equation

$$
\mark[rss]{\mathrm{RSS}} = \mark[regions]{\sum_{j=1}^{J}} \mark[members]{\sum_{i \in R_j}} \left( \mark[y]{y_i} - \mark[pred]{\hat{y}_{R_j}} \right)^{2}
$$

## Description

A regression tree chops the predictor space into boxes and predicts a constant in each. Its [residual sum of squares]{.rss} goes through [every box]{.regions}, and within it [every training point]{.members}, comparing the [actual response]{.y} with the box's [prediction]{.pred}, the mean of the responses in that box. Splits are chosen to make this as small as possible.

Read aloud: [R S S]{.rss} equals [the sum from j equals one to J]{.regions} of [the sum over i in R j]{.members} of [y sub i]{.y} minus [y hat R j]{.pred}, squared.

## .rss

Residual sum of squares $\mathrm{RSS}$.

Pronounced: "R S S".

Finding the best partition is computationally infeasible, so trees are grown greedily by recursive binary splitting: at each step, take the single split that reduces RSS the most, without looking ahead.

Deep trees overfit. Cost-complexity pruning adds $\alpha |T|$ ("alpha times the number of leaves") to the RSS and chooses $\alpha$ by cross-validation (`ccp_alpha` in scikit-learn). Simpler stopping rules are `max_depth` and `min_samples_leaf`.

## .regions

Sum over regions $\sum_{j=1}^{J}$.

Pronounced: "the sum from j equals one to J".

$J$ is the number of leaves (terminal nodes). Each leaf is a box $R_j$ defined by the splits on the path from the root.

## .members

Sum within a region $\sum_{i \in R_j}$.

Pronounced: "the sum over i in R j".

All training observations that fall into box $R_j$.

## .y

Observed response $y_i$.

Pronounced: "y sub i".

## .pred

Leaf prediction $\hat{y}_{R_j}$.

Pronounced: "y hat R j".

The mean response of the training observations in $R_j$. Trees are easy to explain and handle interactions and nonlinearity naturally, but a single tree is unstable: a small change in the data can produce a very different tree. Bagging and random forests fix that.

# Lasso Regression

## Equation

$$
\mark[min]{\underset{\beta}{\text{minimize}}} \; \mark[rss]{\sum_{i=1}^{n} \Big( y_i - \beta_0 - \sum_{j=1}^{p} \beta_j x_{ij} \Big)^2} + \mark[lambda]{\lambda} \mark[penalty]{\sum_{j=1}^{p} |\beta_j|}
$$

## Description

The lasso [chooses the coefficients]{.min} that trade off the [residual sum of squares]{.rss} against the [sum of the absolute coefficient sizes]{.penalty}, weighted by [lambda]{.lambda}. The absolute value makes a big difference compared with ridge: many coefficients become exactly zero, so the lasso also selects variables.

Read aloud: [minimize over beta]{.min} [the residual sum of squares]{.rss} plus [lambda]{.lambda} times [the sum from j equals one to p of the absolute value of beta j]{.penalty}.

## .min

Minimization over the coefficients.

Pronounced: "minimize over beta".

There is no closed-form solution; it is solved numerically (coordinate descent in scikit-learn).

## .rss

Residual sum of squares.

Pronounced: "the residual sum of squares".

## .lambda

Tuning parameter $\lambda \ge 0$.

Pronounced: "lambda".

Larger values push more coefficients to exactly zero. Choose by cross-validation (`LassoCV`). scikit-learn calls it `alpha` and scales the RSS by $\frac{1}{2n}$, so its values are not comparable to textbook $\lambda$s.

## .penalty

L1 penalty $\sum_{j=1}^{p} |\beta_j|$.

Pronounced: "the sum from j equals one to p of the absolute value of beta j". Also written $\lVert \beta \rVert_1$, "the L1 norm of beta".

Produces sparse, more interpretable models. Among strongly correlated predictors the lasso tends to keep one and drop the others somewhat arbitrarily. The elastic net mixes both penalties, $\lambda \big[ \alpha \sum |\beta_j| + \frac{1-\alpha}{2} \sum \beta_j^2 \big]$, to keep sparsity while sharing weight among correlated predictors (`ElasticNet(alpha, l1_ratio)`). As with ridge, standardize predictors first.

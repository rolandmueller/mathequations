# Mean Absolute Error

<!-- term-order: mae norm sum y pred abs -->

## Equation

$$
\mark[mae]{\mathrm{MAE}} = \mark[norm]{\frac{1}{n}} \mark[sum]{\sum_{i=1}^{n}} \mark[abs]{\big|} \, \mark[y]{y_i} - \mark[pred]{\hat{f}(x_i)} \, \mark[abs]{\big|}
$$

## Description

The [mean absolute error]{.mae} is the [average]{.norm} over [all observations]{.sum} of how far the [model's prediction]{.pred} misses the [true response]{.y}, [ignoring the sign]{.abs}. Unlike the mean squared error it does not square the misses, so it is in the unit of the response and a single large miss does not dominate it.

Read aloud: [M A E]{.mae} equals [one over n]{.norm} times [the sum from i equals one to n]{.sum} of [the absolute value of]{.abs} [y sub i]{.y} minus [f hat of x sub i]{.pred}.

## .mae

Mean absolute error $\mathrm{MAE}$.

Pronounced: "M A E".

Directly interpretable: an MAE of 3.2 means predictions are off by 3.2 units on average. Always $\mathrm{MAE} \le \mathrm{RMSE}$; a large gap between the two signals a few large errors. `sklearn.metrics.mean_absolute_error`; in keras `loss="mae"` or `metrics=["mae"]`.

MSE vs. MAE as a loss: minimizing MSE predicts the conditional mean, minimizing MAE the conditional median. Choose MAE when outliers should not dominate, MSE when large errors are disproportionately costly. Like MSE, it only estimates the test error when computed on data not used for fitting.

## .norm

Normalization $\frac{1}{n}$.

Pronounced: "one over n".

$n$ is the number of observations being evaluated: the training set or the test set.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .abs

Absolute value $|\cdot|$.

Pronounced: "the absolute value of".

Drops the sign, so misses above and below count equally and cannot cancel. Its kink at zero makes the loss non-differentiable there; gradient-based training uses a subgradient, or the smooth Huber loss, which is squared for small misses and absolute for large ones.

## .y

Observed response $y_i$.

Pronounced: "y sub i".

## .pred

Prediction $\hat{f}(x_i)$.

Pronounced: "f hat of x sub i".

$\hat{f}$ is the fitted model.

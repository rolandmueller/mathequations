# Mean Squared Error

## Equation

$$
\mark[mse]{\mathrm{MSE}} = \mark[norm]{\frac{1}{n}} \mark[sum]{\sum_{i=1}^{n}} \left( \mark[y]{y_i} - \mark[pred]{\hat{f}(x_i)} \right)^{2}
$$

## Description

The [mean squared error]{.mse} is the [average]{.norm} over [all observations]{.sum} of the squared gap between the [true response]{.y} and the [model's prediction]{.pred}. Computed on the data the model was trained on, it is the training error; computed on held-out data, it is the test error, which is what actually matters.

Read aloud: [M S E]{.mse} equals [one over n]{.norm} times [the sum from i equals one to n]{.sum} of [y sub i]{.y} minus [f hat of x sub i]{.pred}, squared.

## .mse

Mean squared error $\mathrm{MSE}$.

Pronounced: "M S E".

Training MSE always falls as a model gets more flexible; test MSE first falls, then rises again: the U-shape of overfitting. The model with the lowest training error is rarely the one with the lowest test error. Its square root, RMSE, is in the unit of $y$. The mean absolute error, $\frac{1}{n}\sum |y_i - \hat{f}(x_i)|$, is less sensitive to outliers; keras regression examples often train on MSE and report MAE. `sklearn.metrics.mean_squared_error`.

## .norm

Normalization $\frac{1}{n}$.

Pronounced: "one over n".

$n$ is the number of observations being evaluated: the training set or the test set.

## .sum

Summation $\sum_{i=1}^{n}$.

Pronounced: "the sum from i equals one to n".

## .y

Observed response $y_i$.

Pronounced: "y sub i".

## .pred

Prediction $\hat{f}(x_i)$.

Pronounced: "f hat of x sub i".

$\hat{f}$ is the fitted model: a regression line, a tree, a neural network. For a fair test error, $x_i$ must not have been used to fit $\hat{f}$, including for choosing tuning parameters.

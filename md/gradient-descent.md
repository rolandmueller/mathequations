# Gradient Descent

## Equation

$$
\mark[new]{w_{t+1}} = \mark[old]{w_t} - \mark[lr]{\eta} \, \mark[grad]{\nabla_w} \mark[loss]{L(w_t)}
$$

## Description

Gradient descent finds good weights by walking downhill on the loss. Starting from the [current weights]{.old}, measure how wrong the model is with the [loss]{.loss}, compute its [gradient]{.grad}, which points uphill, and take a step of size [eta]{.lr} in the opposite direction to get the [new weights]{.new}. Repeat until the loss stops improving.

Read aloud: [w t plus one]{.new} equals [w t]{.old} minus [eta]{.lr} times [the gradient with respect to w]{.grad} of [the loss L at w t]{.loss}.

## .new

Updated weights $w_{t+1}$.

Pronounced: "w t plus one".

$w$ stands for all parameters of the model at once (every weight and bias in a network), a vector with possibly millions of entries.

## .old

Current weights $w_t$.

Pronounced: "w t".

$t$ counts update steps. Networks start from small random weights, so two training runs can end in different places.

## .lr

Learning rate $\eta$.

Pronounced: "eta".

The most important tuning knob. Too large and the loss bounces around or explodes; too small and training crawls. Typical starting values are 0.001 to 0.01. Optimizers like Adam adapt the step size per weight (`optimizer=keras.optimizers.Adam(learning_rate=1e-3)`).

## .grad

Gradient operator $\nabla_w$.

Pronounced: "the gradient with respect to w". The symbol $\nabla$ is "nabla" or "del".

Turns the loss into a vector of partial derivatives, one per weight: $\nabla_w L = \left( \frac{\partial L}{\partial w_1}, \dots, \frac{\partial L}{\partial w_m} \right)$. Each entry says how much the loss changes when that one weight is nudged. Together they point in the direction of steepest ascent, which is why the update subtracts them. At a minimum the gradient is zero and the updates stop. In a network it is computed layer by layer with the chain rule (backpropagation).

## .loss

Loss function $L(w_t)$, evaluated at the current weights.

Pronounced: "the loss L at w t".

A single number measuring how wrong the model's predictions are on the training data with weights $w_t$: mean squared error for regression, cross-entropy for classification (`model.compile(loss="mse")` or `loss="categorical_crossentropy"` in keras). A regularization penalty such as $\lambda \sum w_j^2$ is simply added to it.

Think of it as a landscape over all possible weights; gradient descent walks downhill on it. For neural networks the landscape has many valleys, so the result depends on the starting point. Plotting the loss after each epoch (the training curve) shows whether training is still improving.

Stochastic gradient descent (SGD) evaluates the loss, and so its gradient, on a small random minibatch rather than all the data: noisier but much faster. One pass through all minibatches is an epoch.

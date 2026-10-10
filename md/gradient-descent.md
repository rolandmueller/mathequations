# Gradient Descent

## Equation

$$
\mark[new]{w_{t+1}} = \mark[old]{w_t} - \mark[lr]{\eta} \, \mark[grad]{\nabla_w L(w_t)}
$$

## Description

Gradient descent finds good weights by walking downhill on the loss. Starting from the [current weights]{.old}, compute the [gradient of the loss]{.grad}, which points uphill, and take a step of size [eta]{.lr} in the opposite direction to get the [new weights]{.new}. Repeat until the loss stops improving.

Read aloud: [w t plus one]{.new} equals [w t]{.old} minus [eta]{.lr} times [the gradient of L with respect to w at w t]{.grad}.

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

Gradient of the loss $\nabla_w L(w_t)$.

Pronounced: "the gradient of L with respect to w at w t". The symbol $\nabla$ is "nabla" or "del".

The vector of partial derivatives $\frac{\partial L}{\partial w}$: how much the loss changes when each weight is nudged. In a network it is computed layer by layer with the chain rule (backpropagation).

Stochastic gradient descent (SGD) estimates it from a small random minibatch rather than all the data: noisier but much faster. One pass through all minibatches is an epoch.

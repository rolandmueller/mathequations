# Activation Functions

## Equation

$$
\begin{aligned}
\mark[relu]{\mathrm{ReLU}(z)} &= \mark[max]{\max}(\mark[zero]{0}, \, \mark[z]{z}) \\[14pt]
\mark[sigmoid]{\sigma(z)} &= \frac{1}{1 + \mark[exp]{e}^{-\mark[z]{z}}} \\[14pt]
\mark[softmax]{\mathrm{softmax}(\mathbf{z})_k} &= \frac{\mark[exp]{e}^{\mark[zk]{z_k}}}{\mark[sum]{\sum_{l=1}^{K}} \mark[exp]{e}^{\mark[zl]{z_l}}}
\end{aligned}
$$

## Description

The activation function g turns a neuron's [weighted sum]{.z} into its output, and is what makes a network nonlinear. Three are used almost everywhere. [ReLU]{.relu} takes the [larger]{.max} of [zero]{.zero} and its input: it passes positive values through and cuts negative ones off. The [sigmoid]{.sigmoid} squashes any number into the range 0 to 1 with an [exponential]{.exp}. [Softmax]{.softmax} works on a whole layer at once: it turns the [score of class k]{.zk} into a probability by comparing it with [the sum over all classes]{.sum} of the [exponentiated scores]{.zl}.

Read aloud: [ReLU of z]{.relu} equals [the maximum]{.max} of [zero]{.zero} and [z]{.z}. [Sigma of z]{.sigmoid} equals one over one plus [e]{.exp} to the minus [z]{.z}. [Softmax of z, component k]{.softmax}, equals [e]{.exp} to the [z k]{.zk}, over [the sum from l equals one to K]{.sum} of [e]{.exp} to the [z l]{.zl}.

## .relu

Rectified linear unit $\mathrm{ReLU}(z)$.

Pronounced: "ReLU of z" ("ray-loo"), or "the rectified linear unit".

The default for hidden layers: `layers.Dense(64, activation="relu")` in keras. Cheap to compute, and its slope is exactly 1 for every positive input, so gradients do not shrink as they pass back through many layers (unlike the sigmoid). Many ReLUs together build any shape out of straight pieces.

Its slope is 0 for negative inputs, so a neuron whose input is always negative stops learning ("dying ReLU"). Leaky ReLU, $\max(0.01z, z)$, keeps a small slope there.

## .max

Maximum $\max(\cdot, \cdot)$.

Pronounced: "the maximum of".

Returns the larger of its two arguments. In numpy: `np.maximum(0, z)`.

## .zero

Threshold $0$.

Pronounced: "zero".

The point where the neuron switches on. The bias $b$ shifts where that happens in terms of the original inputs.

## .z

Pre-activation $z$.

Pronounced: "z".

The neuron's weighted sum of its inputs plus bias, $z = \sum_j w_j x_j + b$: the number that goes into the activation function. ReLU and sigmoid act on each neuron's $z$ separately.

## .sigmoid

Sigmoid (logistic) function $\sigma(z)$.

Pronounced: "sigma of z", or "the sigmoid of z".

Output between 0 and 1, with $\sigma(0) = 0.5$, so it reads as a probability. Used in the output layer for binary classification, together with binary cross-entropy: `layers.Dense(1, activation="sigmoid")`. A single sigmoid neuron is exactly logistic regression.

Its slope is $\sigma(z)\,(1 - \sigma(z))$, at most 0.25 and nearly 0 for large $|z|$. Multiplied through many layers this makes gradients vanish, which is why hidden layers now use ReLU. The related $\tanh(z) = 2\sigma(2z) - 1$ ranges from $-1$ to $1$.

## .exp

Exponential $e^{(\cdot)}$.

Pronounced: "e to the". $e \approx 2.718$.

Always positive, so the sigmoid stays between 0 and 1 and softmax produces non-negative probabilities. It also exaggerates differences: the largest score gets most of the probability.

## .softmax

Softmax $\mathrm{softmax}(\mathbf{z})_k$.

Pronounced: "softmax of z, component k".

The output layer for multiclass classification with $K$ classes: `layers.Dense(K, activation="softmax")`, trained with categorical cross-entropy. Unlike ReLU and sigmoid it needs the whole vector $\mathbf{z}$ of scores, because each output depends on all of them. The $K$ outputs are positive and add up to 1. For $K = 2$ it reduces to the sigmoid of the difference of the two scores.

## .zk

Score of class $k$, $z_k$.

Pronounced: "z k".

The pre-activation of output node $k$, often called a logit. Only differences between scores matter: adding the same constant to all of them leaves the probabilities unchanged.

## .sum

Sum over classes $\sum_{l=1}^{K}$.

Pronounced: "the sum from l equals one to K".

$K$ is the number of classes (output nodes). Dividing by this sum is what makes the probabilities add up to 1.

## .zl

Score of class $l$, $z_l$.

Pronounced: "z l".

The running index $l$ visits every class, including $k$ itself.

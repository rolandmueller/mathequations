# Forward Propagation

## Equation

$$
\mark[out]{\mathbf{a}^{(l)}} = \mark[act]{\sigma}\big( \mark[w]{W^{(l)}} \, \mark[in]{\mathbf{a}^{(l-1)}} + \mark[b]{\mathbf{b}^{(l)}} \big)
$$

## Description

A neural network computes its output layer by layer. Each layer takes the [outputs of the previous layer]{.in}, multiplies them by a [weight matrix]{.w}, adds a [bias vector]{.b}, and passes every entry through the [activation function]{.act}. The result is the [layer's output]{.out}, which feeds the next layer. One matrix multiplication handles all neurons of a layer at once.

Read aloud: [a l]{.out} equals [sigma]{.act} of [W l]{.w} times [a l minus one]{.in} plus [b l]{.b}.

## .out

Activations of layer $l$, $\mathbf{a}^{(l)}$.

Pronounced: "a l". The superscript $(l)$ is a layer index, not a power.

A vector with one entry per node. The last layer's activations are the network's prediction.

## .act

Activation function $\sigma$.

Pronounced: "sigma".

Applied entry by entry. The sigmoid $\sigma(z) = \frac{1}{1 + e^{-z}}$ squashes values into $(0, 1)$, like a soft threshold; ReLU is the modern default in hidden layers. Without it, all layers together would collapse into one linear map.

## .w

Weight matrix $W^{(l)}$.

Pronounced: "W l".

One row per node in layer $l$, one column per node in layer $l - 1$; entry $w_{jk}$ is the weight of the link from node $k$ to node $j$. A 3-node layer fed by 3 inputs has a $3 \times 3$ matrix. In numpy: `np.dot(W, a_prev)`.

## .in

Activations of the previous layer, $\mathbf{a}^{(l-1)}$.

Pronounced: "a l minus one".

For the first layer, $\mathbf{a}^{(0)} = \mathbf{x}$, the input features.

## .b

Bias vector $\mathbf{b}^{(l)}$.

Pronounced: "b l".

Shifts each node's threshold. Some hand-built networks leave it out, or add a constant input of 1 instead.

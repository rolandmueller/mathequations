# Artificial Neuron

## Equation

$$
\mark[a]{a} = \mark[act]{g}\Big( \mark[bias]{b} + \mark[sum]{\sum_{j=1}^{p}} \mark[w]{w_j} \mark[x]{x_j} \Big)
$$

## Description

A neuron is a small linear model followed by a nonlinear switch. It [weighs]{.w} each [input]{.x}, [adds them up]{.sum} together with a [bias]{.bias}, and passes the total through an [activation function]{.act} to produce its [output]{.a}. A neural network stacks layers of these, feeding outputs of one layer as inputs to the next.

Read aloud: [a]{.a} equals [g]{.act} of [b]{.bias} plus [the sum from j equals one to p]{.sum} of [w j]{.w} times [x j]{.x}.

## .a

Activation (output) $a$.

Pronounced: "a".

The neuron's output, passed on to the next layer. A hidden layer of many neurons computes new features of the input that are learned rather than hand-designed.

## .act

Activation function $g$.

Pronounced: "g".

Without it, stacked layers would collapse into one linear model. See the Activation Functions page for the formulas. Common choices: ReLU $g(z) = \max(0, z)$, the default for hidden layers; sigmoid $\frac{1}{1 + e^{-z}}$; and softmax at the output for classification. In keras: `Dense(64, activation="relu")`.

## .bias

Bias $b$.

Pronounced: "b".

Plays the role of the intercept $\beta_0$; it shifts the point at which the neuron switches on. Not to be confused with statistical bias.

## .sum

Summation over inputs $\sum_{j=1}^{p}$.

Pronounced: "the sum from j equals one to p".

$p$ is the number of inputs. For a whole layer, all neurons are computed at once as a matrix product: $a = g(Wx + b)$.

## .w

Weight $w_j$.

Pronounced: "w j".

Learned from data by gradient descent. A network with one hidden layer of sigmoid neurons and a single output is a stack of logistic regressions.

## .x

Input $x_j$.

Pronounced: "x j".

The $j$-th input: a raw feature in the first layer, or a previous layer's activation. Scale inputs (e.g. standardize) for stable training.

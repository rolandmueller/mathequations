# Backpropagation

## Equation

$$
\begin{aligned}
\mark[ehid]{\mathbf{e}_{\text{hidden}}} &= \mark[wt]{W^{\top}} \, \mark[eout]{\mathbf{e}_{\text{out}}} \\[8pt]
\mark[dw]{\Delta W} &= \mark[lr]{\eta} \, \big( \mark[eout]{\mathbf{e}_{\text{out}}} \odot \mark[deriv]{\mathbf{o} \odot (1 - \mathbf{o})} \big) \, \mark[prev]{\mathbf{h}^{\top}}
\end{aligned}
$$

## Description

Training needs to know how much each weight is to blame for the error. The [output error]{.eout} is known directly: target minus output. Backpropagation [splits it back]{.ehid} across the hidden nodes in proportion to the [weights that connect them]{.wt}, then repeats layer by layer. Each [weight update]{.dw} is a [small step]{.lr} in the direction that reduces the error: the error times the [slope of the sigmoid]{.deriv} times the [activation feeding into that weight]{.prev}.

Read aloud: [e hidden]{.ehid} equals [W transpose]{.wt} times [e out]{.eout}. [Delta W]{.dw} equals [eta]{.lr} times [e out]{.eout} times [o times one minus o]{.deriv}, times [h transpose]{.prev}.

## .ehid

Hidden-layer error $\mathbf{e}_{\text{hidden}}$.

Pronounced: "e hidden".

A hidden node that sends a large weight to an output with a large error gets a large share of the blame. The same step moves the error from layer $j$ back to layer $j - 1$ throughout the network.

## .wt

Transposed weight matrix $W^{\top}$.

Pronounced: "W transpose".

The weights between the hidden and output layer, run backwards: transposing swaps the roles of "from" and "to".

## .eout

Output error $\mathbf{e}_{\text{out}}$.

Pronounced: "e out".

Target minus actual output, $\mathbf{t} - \mathbf{o}$, for one training example.

## .dw

Weight update $\Delta W$.

Pronounced: "delta W".

Applied as $W \leftarrow W + \Delta W$ (plus, because the error was defined as target minus output). This is gradient descent on the squared error, computed with the chain rule; for hidden-layer weights, use $\mathbf{e}_{\text{hidden}}$ and that layer's outputs instead.

## .lr

Learning rate $\eta$.

Pronounced: "eta".

## .deriv

Sigmoid slope $\mathbf{o} \odot (1 - \mathbf{o})$.

Pronounced: "o times one minus o".

The derivative of the sigmoid, $\sigma'(z) = \sigma(z)\,(1 - \sigma(z))$, written in terms of the output $\mathbf{o} = \sigma(z)$. $\odot$ means element-wise multiplication. Where the sigmoid is flat (outputs near 0 or 1) the slope is tiny and learning stalls: the vanishing gradient problem that ReLU mitigates.

## .prev

Previous-layer outputs $\mathbf{h}^{\top}$.

Pronounced: "h transpose".

The activations feeding into the weights being updated. The product of a column (errors) and a row (inputs) gives one update for every weight in the matrix.

---
hide:
  - toc
---

!!! info "Before you annotate"
    * Physical interaction does not imply that proteins directly interact. Co-fractionation or co-localization are forms of physical interaction.
    * Physical interactions cannot capture interactions between two RNAs, but can capture protein-RNA interactions.

To create a physical interaction, on the `Quick Links` list, click on `Physical Interaction` to open a window that requires you to indicate:

* The two genes that show the physical interaction in `Gene` and `Interacting Gene`.
* The `Interaction type` (the type of experiment that supports the physical interaction).
* In the `Comment`, it's very useful for us if you indicate the figure or table where this interaction comes from.

When making an annotation consider that:

* It might not be obvious what an interaction type is from its name. If you hold the mouse over the interaction type in the dropdown, the definition will be displayed on the side:
    <div markdown style="max-width: 600px">
      ![](assets/pi_definition.png)
    </div>
* Some types of interaction are symmetrical (the ones that don't have a predicate in parenthesis), and it does not matter which gene you select on `Gene`, and `Interacting Gene`.
* Most of them are not symmetrical and the order matters:
    * Whenever there is a bait and prey experiment, e.g. when the predicate contains `captures`, `Gene` should be the bait and `Interacting Gene` should be the prey.
    * For FRET, the `Gene` should be the donor and `Interacting Gene` the acceptor.
    * For `binds to peptide`, `Gene` should be the protein that can bind to a peptide from the `Interacting Gene`.
    * For `binds to RNA`, `Gene` should be the protein that can bind to the RNA of the `Interacting Gene`.
* If you perform asymmetric experiments both ways (A affinity-captures B and B affinity-captures A), you should include two physical interaction annotations.
* If you have to add many interactions, there are ways to do this quickly, see our [productivity page](./productivity.md#transferring-physical-interactions).

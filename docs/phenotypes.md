---
hide:
  - toc
---

!!! info "To make phenotype annotations, you need to add genotypes first: see [how to add genotypes](./genes_alleles_genotypes.md)"

ggg

## Video summary

<div class="video-sizer">
    <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/-cj_PdJi68A" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Making an annotation

On the `Quick Links` list, click on `Phenotype`, it should open a window that requires you to indicate:

  * **Genotype:** you can choose from the previously created genotypes (see [how to add genotypes](./genes_alleles_genotypes.md)). You can click on the magnifying glass on the right to use a search box instead of a drop-down menu.
  * **Term name:** a FYPO term describing the phenotype associated with the genotype you selected above.
      * Start typing a phenotype in the search box. If you do not find what you are looking for, choose a broad term (e.g. abnormal spindle).
      * Click the chosen term, and verify that the displayed definition describes the phenotype you want to annotate. There might be a "Comment" section with extra tips for annotation.
      * If the blue button reads `Next`, click it and see if you can find a more specific term that the one you originally selected. If so, select it and do as before.
      * Otherwise, click `Finish`.
  * **Annotation extension:** this field appears once you have selected a term describing the phenotype, always click the `Add` button to see if you canspecify:
      * **Penetrance:** proportion of cells in the population that show the phenotype, can be a qualitative value or a percentage.
      * **Severity:** qualitative value to capture the strength of the phenotype. This is specially useful when several mutants show the same phenotype with different strength (e.g. cells being elongated).
      * **Others:** certain terms allow for other extensions. In general they are self-explaining, but here some important clarifications:

        ??? info "Other extensions"
            * **Localisation phenotypes:** assayed protein or transcript extensions should be used to indicate the affected gene product. If a mutation in gene X affects its localisation, choose X in `assayed protein`. If it affects the localisation of protein Y, choose Y. If it affects both, make one annotation for each.
            * **Catalytic activity phenotypes:** similarly, if a mutation in enzyme X affects its activity, still specify gene X in `assayed enzyme`, and if X auto-phosphorylates, indicate it in `assayed substrate`. A mutation in gene X may also affect catalytic activity of Y, then use Y in `assayed enzyme`
            * **Interaction phenotypes:** Indicate always two gene products. Mutation in gene X may affect interaction of proteins Z and Y, or of protein X with Y. If a mutation affects a protein/RNA interaction with itself, add the same protein twice.
            * **Assayed region extension:** depending on the phenotype, you will be able to select from either:
              * **Genes:** e.g. to indicate that a mutation gene X causes "abnormal chromatin organization" in the region of gene Y, you select `assayed region or gene` with gene Y. If several genes are affected, create multiple annotations.
              * **Sequence ontology term:** to indicate that the phenotype affects a type of sequence (e.g. `centromeric repeat`).

  * **Evidence code:** the type of experiment where the phenotype was observed.
  * **Conditions:**  Type and select from the autocomplete options. Several conditions can be added, and capture the medium or temperature used, presence of chemicals, agar plates or liquid culture, etc.

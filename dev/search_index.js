var documenterSearchIndex = {"docs":
[{"location":"API_ParameterLearning/#Parameters-Learning-module","page":"Parameters Learning module","title":"Parameters Learning module","text":"","category":"section"},{"location":"API_ParameterLearning/","page":"Parameters Learning module","title":"Parameters Learning module","text":"CurrentModule = LPSjl.ParameterLearning","category":"page"},{"location":"API_ParameterLearning/","page":"Parameters Learning module","title":"Parameters Learning module","text":"calculateEmpiricalDistribution(::AbstractDataFrame)","category":"page"},{"location":"API_ParameterLearning/#LPSjl.ParameterLearning.calculateEmpiricalDistribution-Tuple{DataFrames.AbstractDataFrame}","page":"Parameters Learning module","title":"LPSjl.ParameterLearning.calculateEmpiricalDistribution","text":"calculateEmpiricalDistribution(::AbstractDataFrame)\n\nReturns the Empirical Distribution of a dataFrame\n\n\n\n\n\n","category":"method"},{"location":"API_ParameterLearning/","page":"Parameters Learning module","title":"Parameters Learning module","text":"MaximumLikelihoodEstimator","category":"page"},{"location":"API_ParameterLearning/#LPSjl.ParameterLearning.MaximumLikelihoodEstimator","page":"Parameters Learning module","title":"LPSjl.ParameterLearning.MaximumLikelihoodEstimator","text":"MaximumLikelihoodEstimator\n\nFields\n\nnetwork::BayesianNetwork: the network to estimate\ndata::DataFrame: the dataset\n\nConstructors\n\nMaximumLikelihoodEstimator(network::BayesianNetwork, data::DataFrame)\n\n\n\n\n\n","category":"type"},{"location":"structureLearning/#Bayesian-Networks-structure-learning:-a-summary","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"","category":"section"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Given:","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"A set of random variable X_1 X_2  X_n\nA data set D on those variables","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Find a Bayesian network (structure S + parameters theta_s) that is optimal.","category":"page"},{"location":"structureLearning/#The-problem-of-model-selection","page":"Bayesian Networks structure learning: a summary","title":"The problem of model selection","text":"","category":"section"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"A Bayesian Network structure includes assumptions on how variables are related, thus being called a model.","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Therefore, given a data set D what Bayesian Network Structure S should be selected?","category":"page"},{"location":"structureLearning/#Maximum-Likelihood-Estimation-(MLE)","page":"Bayesian Networks structure learning: a summary","title":"Maximum Likelihood Estimation (MLE)","text":"","category":"section"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Maximum Likelihood Estimation is a method to choose parameters of  model. The selected parameters aim to maximise the likelihood that the process described by the model is observed in the data. ","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"In other words, choose parameters to maximize the log-likelihood l(thetaD) = log P(Dtheta)","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Log-likelihood of (S theta_S) given the data D is l(S theta_SD) = log P(DS theta_S)","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Choose the structure and parameters that maximize the log-likelihood, therefore, find (S^* theta_S^*) that ","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"l(S^* theta_S^*D) = sup_S theta_S l(S theta_SD) = max_Ssup_ theta_S l(S theta_SD)","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Given S it is possible to find theta_S^* that maximizes l(S theta_SD), which is the MLE of the parameters, by ","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"l^*(SD) = sup_theta_S l(S theta_SD) = l(S theta_S^*D)","category":"page"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Thus, the model selection aims to find the structure S that maximizes l^*(SD).","category":"page"},{"location":"structureLearning/#References","page":"Bayesian Networks structure learning: a summary","title":"References","text":"","category":"section"},{"location":"structureLearning/","page":"Bayesian Networks structure learning: a summary","title":"Bayesian Networks structure learning: a summary","text":"Nevin L. Zhang. COMP538: Introduction to Bayesian Networks\nJonny Brooks-Bartlett. Probability concepts explained: Maximum likelihood estimation\nHeckerman, Geiger & Chickering. Learning Bayesian Networks: The Combination of Knowledge and Statistical Data","category":"page"},{"location":"EX_BayesianNetworks/#Instancing-a-Bayesian-Network","page":"Instancing a Bayesian Network","title":"Instancing a Bayesian Network","text":"","category":"section"},{"location":"EX_BayesianNetworks/#Example-1-Simple-Bayesian-Network","page":"Instancing a Bayesian Network","title":"Example 1 - Simple Bayesian Network","text":"","category":"section"},{"location":"EX_BayesianNetworks/","page":"Instancing a Bayesian Network","title":"Instancing a Bayesian Network","text":"(Image: Example 1.5)","category":"page"},{"location":"EX_BayesianNetworks/","page":"Instancing a Bayesian Network","title":"Instancing a Bayesian Network","text":"# Node C\nnode_C = DiscreteNode(\"C\", [\"c1\", \"c2\"])\nset_parameters!(node_C, sparse([9/13 4/13]))\n\n# Node V\nnode_V = DiscreteNode(\"V\", [\"v1\", \"v2\"])\nadd_parent!(node_V, node_C)\nset_parameters!(node_V, sparse([[1/3 2/3]; [1/2 1/2]]))\n\n# Node S\nnode_S = DiscreteNode(\"S\", [\"s1\", \"s2\"])\nadd_parent!(node_S, node_C)\nset_parameters!(node_S, sparse([[2/3 1/3]; [1/2 1/2]]))","category":"page"},{"location":"EX_BayesianNetworks/#Example-2-Parameters-Learning","page":"Instancing a Bayesian Network","title":"Example 2 - Parameters Learning","text":"","category":"section"},{"location":"EX_BayesianNetworks/","page":"Instancing a Bayesian Network","title":"Instancing a Bayesian Network","text":"node_H = DiscreteNode(\"H\", [\"T\", \"F\"])\n\nnode_S = DiscreteNode(\"S\", [\"T\", \"F\"])\nadd_parent!(node_S, node_H)\n\nnode_E = DiscreteNode(\"E\", [\"T\", \"F\"])\nadd_parent!(node_E, node_H)\n\ndf = DataFrame(\"H\" => [\"T\", \"T\", \"F\", \"F\", \"T\", \"T\", \"F\", \"T\", \"T\", \"F\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\"],\n               \"S\" => [\"F\", \"F\", \"T\", \"F\", \"F\", \"F\", \"F\", \"F\", \"F\", \"F\", \"F\", \"T\", \"F\", \"T\", \"F\", \"F\"],\n               \"E\" => [\"T\", \"T\", \"F\", \"T\", \"F\", \"T\", \"F\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\"])\n\nestimator = MaximumLikelihoodEstimator(df, BayesianNetwork([node_H, node_S, node_E], [(node_H, node_S), (node_H, node_E)]))\nestimate(estimator)","category":"page"},{"location":"EX_BayesianNetworks/#References","page":"Instancing a Bayesian Network","title":"References","text":"","category":"section"},{"location":"EX_BayesianNetworks/","page":"Instancing a Bayesian Network","title":"Instancing a Bayesian Network","text":"Darwiche, A. Modeling and Reasoning with Bayesian Networks\nNeapolitan, R. Learning Bayesian Networks","category":"page"},{"location":"API_BayesianNetworks/#Bayesian-Networks-module","page":"Bayesian Networks module","title":"Bayesian Networks module","text":"","category":"section"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":"CurrentModule = LPSjl.BayesianNetworks","category":"page"},{"location":"API_BayesianNetworks/#Nodes","page":"Bayesian Networks module","title":"Nodes","text":"","category":"section"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" AbstractNode","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.AbstractNode","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.AbstractNode","text":"AbstractNode\n\nSupertype for all types of Node\n\n\n\n\n\n","category":"type"},{"location":"API_BayesianNetworks/#DiscreteNode","page":"Bayesian Networks module","title":"DiscreteNode","text":"","category":"section"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" DiscreteNode","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.DiscreteNode","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.DiscreteNode","text":"DiscreteNode <: AbstractNode\n\nFields\n\nname::String: the node name\nparents::Vector{DiscreteNode}: the parents of the node\ncategories::Vector{String}: the categories of the node\nparameters::SparseMatrixCSC: the parameters of the node\n\nConstructors\n\nDiscreteNode(name::String, categories::Vector{String})\n\n\n\n\n\n","category":"type"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" name(node::DiscreteNode) ","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.name-Tuple{LPSjl.BayesianNetworks.DiscreteNode}","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.name","text":"name(node::DiscreteNode)\n\nReturns the name of the node\n\n\n\n\n\n","category":"method"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" parents(node::DiscreteNode)","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.parents-Tuple{LPSjl.BayesianNetworks.DiscreteNode}","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.parents","text":"parents(node::DiscreteNode)\n\nReturns the parents of the node\n\n\n\n\n\n","category":"method"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" categories(node::DiscreteNode)","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.categories-Tuple{LPSjl.BayesianNetworks.DiscreteNode}","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.categories","text":"categories(node::DiscreteNode)\n\nReturns the categories of the node\n\n\n\n\n\n","category":"method"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" parameters(node::DiscreteNode)","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.parameters-Tuple{LPSjl.BayesianNetworks.DiscreteNode}","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.parameters","text":"parameters(node::DiscreteNode)\n\nReturns the CPT of the node\n\n\n\n\n\n","category":"method"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" add_parent!(node::DiscreteNode, parent::DiscreteNode)","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.add_parent!-Tuple{LPSjl.BayesianNetworks.DiscreteNode, LPSjl.BayesianNetworks.DiscreteNode}","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.add_parent!","text":"add_parent!(node::DiscreteNode, parent::DiscreteNode)\n\nAdd a parent to the node\n\n\n\n\n\n","category":"method"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":"set_parameters!(node::DiscreteNode, parameters::SparseMatrixCSC)","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.set_parameters!-Tuple{LPSjl.BayesianNetworks.DiscreteNode, SparseArrays.SparseMatrixCSC}","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.set_parameters!","text":"set_parameters(node::DiscreteNode, parameter::SparseMatrixCSC)\n\nAdd a parameter to the node\n\n\n\n\n\n","category":"method"},{"location":"API_BayesianNetworks/#Bayesian-Networks","page":"Bayesian Networks module","title":"Bayesian Networks","text":"","category":"section"},{"location":"API_BayesianNetworks/","page":"Bayesian Networks module","title":"Bayesian Networks module","text":" BayesianNetwork","category":"page"},{"location":"API_BayesianNetworks/#LPSjl.BayesianNetworks.BayesianNetwork","page":"Bayesian Networks module","title":"LPSjl.BayesianNetworks.BayesianNetwork","text":"BayesianNetwork{T}\n\nFields\n\nV::Vector{T}: The array of nodes\nE::Vector{Tuple{T}}: The array of edges\n\nReference\n\nNeapolitan, R. Learning Bayesian Networks, Ch. 1, p. 40\n\n\n\n\n\n","category":"type"},{"location":"#LPS-Julia-Library","page":"LPS Julia Library","title":"LPS Julia Library","text":"","category":"section"},{"location":"","page":"LPS Julia Library","title":"LPS Julia Library","text":"A library for Dynamic Bayesian Networks in Julia.","category":"page"}]
}

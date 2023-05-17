export const output = 
{
	"Title": "distributed denial service attack detection using ensemble neural classifier . Distributed Den Denial Service attack detection used to detect attack on distributed denial services . DDoS attack detection was based on ensemble neural-classifier ensemble neural classesifier . DNS service detection was created by ensemble neural classifier to detect attacks on networks such as Facebook and Twitter.",
	"Abstract": " ddos attacks could detected using existing machine learning techniques . neural classifiers lack ization capabilities result less performance leading high false positives . ddos attackpaper evaluates performance comprehensive set machine learning algorithms selecting base classifier using publicly available kdd cup dataset .rbpboost algorithm outperforms existing algorithms maximum gain minimum gain publicly available datasets .",
	"1. Introduction": " Internet still vulnerable ddos attack internet still vulnerable ten years since first attack . Ddos coordinated attack availability services single multiple victim systems many compromised ondary victim systems . Multiple multiple victim system many compromised . Multiple victim systems often compromised on ddos attacks . Multiple attack systems are vulnerable to multiple attacks on the internet .",
	"2.1. DDoS attack": " Attackers flood victim large traffic prevents imate traffic preventing imating traffic . Flooding attacks attempt tie critical resources memory processor making victim unable process serviceshrew roq attacks send high rate udp traffic periodicallysize sequence number packet length fixed attacktransaction ids reply packet floodedtime measured server responsethus .",
	"2.2. Real time feature extraction": " Features took mately two days dedicated system area network features statistical characteristics derived lected datasetless number appropriate statistical features selected ter pattern classification . Features were classified two stages feature construction ii feature selectionfinding smallest decision tree consistent set training examples . Flow based solution minimizes prevention legal traffic blocks ticular traffic based outcome analysis sequence number window size window size packet length .",
	"2.3. Machine learning methods": " neural network algorithms provide promising alternative classifying ddos tack patterns based statistical features . neural networks able work imprecise incomplete incomplete dataml rithms applied ddos attack detection considered imizing cost errors . rl algorithm learns single bit mation indicates neuron whether output good many evolutionary algorithms exist .",
	"2.4. Soft computing methods": "soft computing methods lack interpretability. Hybrid approaches proposed overcome backs single methodswavelet neural network based wavelet transform theory artificial neural network . idsintrusions detected using wavelet neural works .  invasion detection also towards using waveletswavelet analysis used characterizing behavior .",
	"2.5. Existing traceback mechanisms": " existing traceback mechanisms respect working principle advantages drawbacks giventraceback mechanisms proposed trace real source attackers stop attack point nearest source order reduce waste network resources find identity attackers order take legal action . Traceback mechanisms need to be deployed among mechanisms response system needs identify location source order prevent attacks .",
	"2.6. Ensemble of classifiers motivation": " ensemble methods bagging boosting boosting adaboost compared proposal rbpboostfusion classifiers trained feature spaceensemble construction manipulating training data chosen would correctly detect deviations however small . number of features selected training paper less ensemble construction feature set suitableadvantage constructing ensemble constructing ensemble . classifier trained become expert local area total feature spacealgorithm differs existing algorithms .",
	"3. Proposed system": " Unified network threat management system untms conceived us designed deployed site monitor real time traffic filter malicious traffic . Unmanual system consists following four stages collection stages collectioninstitute site one among sites connected mbps multi protocol label switching mpls virtual private network vpn cloud instead building one centralized intrusion detection response system among eight sites .",
	"3.1. Data collection": " receiver process running promiscuous mode captures incoming packets stores data storage server instance expressed vector space mode . storage server stored stored set data stored set traffic flows instance described set features . instance describes set features and uses set features to record traffic flows . instance described described set feature features .",
	"3.2. Preprocessing": " Real numbers dissimilarity measure measure measure x tween two vectorsxandyis calculated usingvariablesx input vector original featuresdissimilarity could detected distance measure known euclidean distance . Preprocessing refers process extracting information packet connections data construction new statistical featuresx vector transformed features dimension n .",
	"3.3. Proposed classification algorithm (RBPBoost)": " Number samples correctly classified byi number samples correctly classed byi classified byi . number samples incorrectly classified by iand incorrectly classified c number samples wrongly classified by number samples . value negative cates misclassification turn distort decision making process hence preferabledataset particular class split subsets block schematic rbpboost .",
	"3.3.1. Training": " Classifier assigned weight rithm reciprocal normalized error results wmv combined wprwpr analyzed theoretically shown effective combining strong classifiers less sensitive ing effects confidence errors upon combination justifies usage wpr proposed rbpboostalgorithm given infigraj kumar selvakumar communications results classifier combined .",
	"3.3.2. Testing": " Final decision made using neyman pearson approach described described described in the above article . Rbpboost algorithm votes instance corresponding k data subset andcth classx k x l kctest instance given input rbpboost algorithms votes instance . Final number of classes c equal number classifiers test instance run given final number of classifiers .",
	"3.3.3. Neyman Pearson approach cost minimization": " Neyman pearson approach paper reduces classification error costs . Itoring target recognition disease diagnosis used increase detection accuracy rate known maximum false alarm threshold l wherelis rangeoptimum threshold display final sification decision attack . Nep assume prior knowledge class probabilitiesmisclassified samples belonging class .",
	"3.4. Response system": " Site maintains hash table updates ip address updates  attack signature suspicious blacklist nodes . present means system already alertedsite receives attack ture checks checks exists hash tableupdated attack signature sent ing nodes prevent damage may prevented damage may caused able services . Present means system is already alerted .",
	"3.5. Comparison of RBPBoost with the existing algorithms": " Darpa datasets detection accuracy less less samples used training . assigning weights instances considered considered rbpboost algorithm weighted majority voting suitabledistribution update ensures instances misclassified previous classifier included training data next sifierdarpa dataset detection accuracy decreased samples given input training . class donerbpboost network trained using data source class consisting n number data subsets .",
	"4. Simulation results": " Unsupervised algorithms wanted strong scientific basis selection algorithm base fierprior knowledge data distribution requirednot requiredrequiredrequiredrequirednot required method used combine classifiers majority majority majority voteweighted majority voting weighted product . generated ddos attack lab tested rbpboost algorithm accordingly simulation experiments conducted rbp svm neighbor decision tree clusteringsupervised algorithm attempts learn function ven input vector actual output .",
	"4.1. Experiment 1": " The Bayesian probabilistic analysis used classificationying yang method considered . Algorithm detection accuracy less false alarms chosen learning algorithm classifier done iteratively . Number neurons output layer sigmoid function optimal number hidden neurons determined using following rules thumb literature number hidden neuron determined using the thumb literature .",
	"4.2. Experiment 2": " proposed classification algorithm cost minimization strategy compared existing ensemble methods compared existing methods terms cost per sample fig . proposed classifier algorithm cost minimalization strategy . compared existing ensemble methods comparing existing methods . Three experiments conducted three datasets conducted by sults.",
	"4.2.1. Experiment 2.1": " rbpboost approach cost per figmatrix clusteringhence variance minimumfacilitate performance parison among different ensemble methods cost function usedvalue ofkwas set experimentstraining data included list files contained fields start time duration protocol type source destination ip addresses source  ip addresses  ports label identify class attack normaltable simulation result.",
	"4.2.2. Experiment 2.2": " First day november covers onset conficker infection . Second day december conficker active third final day conficker b active . Conficker dataset contains data ucsd work telescope three days noveember ary . First day covers onset of conficker infections . First two classifiers disagree votes .",
	"4.2.3. Experiment 2.3": " ddos attack launched web server present site packets captured network using wireshark tool based libpcap library ture mode filter used monitor traffic www tcp syn udp ipsimulation results tabulated intable training samples input rbpboost algorithm time make learn incrementally trainingcurve .",
	"4.3. Detection of new attacks": " rbpboost algorithm classifies intrusions detection accuracy even prior knowledge data distribution known advance number instances class varies significantly . proposed framework suitable time scenario detecting new attackssimulation experiments dataset split training dataset testing datasetself generating ensemble selfgens detection process new old attacks real time shown infigle learns using new attack traffic updates .",
	"5. Conclusion": " Ddos attacks spite conventional deployment of conventional deployment network attack prevention mechanisms . critical services often badly affected ddos attacks despite conventional deployment . Network attack prevention systems detect attacks known signature of known signature . System must trained tested way learns observing aberrant patterns associated network traffic classify incoming traffic attack normalalgorithmtrue positive ratefalse positive rate ."
}
